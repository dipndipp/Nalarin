package handlers

import (
	"context"
	"net/http"
	"strings"
	"time"

	"aj-be/config"
	"aj-be/internal/middleware"
	"aj-be/internal/utils"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

type AuthHandler struct {
	DB  *pgxpool.Pool
	Cfg config.Config
}

func NewAuthHandler(db *pgxpool.Pool, cfg config.Config) *AuthHandler {
	return &AuthHandler{DB: db, Cfg: cfg}
}

type registerReq struct {
	Email       string `json:"email"`
	Password    string `json:"password"`
	DisplayName string `json:"display_name"`
	Role        string `json:"role"` // "student" | "tutor"
}

type loginReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (h *AuthHandler) Register(c *gin.Context) {
	var req registerReq
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid body"})
		return
	}

	req.Email = strings.TrimSpace(strings.ToLower(req.Email))
	req.DisplayName = strings.TrimSpace(req.DisplayName)

	if req.Email == "" || !strings.Contains(req.Email, "@") {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid email"})
		return
	}
	if len(req.Password) < 8 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "password min 8 chars"})
		return
	}

	// Map role from UI to DB enum
	dbRole := ""
	switch req.Role {
	case "student":
		dbRole = "learner"
	case "tutor":
		dbRole = "mentor"
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "role must be student or tutor"})
		return
	}

	hash, err := utils.HashPassword(req.Password, h.Cfg.BcryptCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to hash password"})
		return
	}

	ctx, cancel := context.WithTimeout(c.Request.Context(), 5*time.Second)
	defer cancel()

	// transaction
	tx, err := h.DB.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "db begin failed"})
		return
	}
	defer tx.Rollback(ctx)

	var userID string
	err = tx.QueryRow(ctx,
		`insert into users (email, password_hash) values ($1, $2) returning id`,
		req.Email, hash,
	).Scan(&userID)
	if err != nil {
		// likely duplicate email
		c.JSON(http.StatusConflict, gin.H{"error": "email already registered"})
		return
	}

	_, err = tx.Exec(ctx,
		`insert into profiles (user_id, role, display_name) values ($1, $2, $3)`,
		userID, dbRole, nullIfEmpty(req.DisplayName),
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create profile"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "db commit failed"})
		return
	}

	token, exp, err := utils.SignJWT(userID, dbRole, h.Cfg.JWTSecret, h.Cfg.JWTExpiresMin)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to sign token"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"access_token": token,
		"expires_in":   int(time.Until(exp).Seconds()),
		"user": gin.H{
			"id":           userID,
			"email":        req.Email,
			"display_name": req.DisplayName,
			"role":         dbRole,
		},
	})
}

func (h *AuthHandler) Login(c *gin.Context) {
	var req loginReq
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid body"})
		return
	}
	req.Email = strings.TrimSpace(strings.ToLower(req.Email))

	ctx, cancel := context.WithTimeout(c.Request.Context(), 5*time.Second)
	defer cancel()

	var userID, email, hash, role, displayName string
	err := h.DB.QueryRow(ctx, `
		select u.id, u.email, u.password_hash, p.role, coalesce(p.display_name,'')
		from users u
		join profiles p on p.user_id = u.id
		where u.email = $1 and u.is_active = true
	`, req.Email).Scan(&userID, &email, &hash, &role, &displayName)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "email or password wrong"})
		return
	}

	if err := utils.ComparePassword(hash, req.Password); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "email or password wrong"})
		return
	}

	token, exp, err := utils.SignJWT(userID, role, h.Cfg.JWTSecret, h.Cfg.JWTExpiresMin)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to sign token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"access_token": token,
		"expires_in":   int(time.Until(exp).Seconds()),
		"user": gin.H{
			"id":           userID,
			"email":        email,
			"display_name": displayName,
			"role":         role,
		},
	})
}

func (h *AuthHandler) Me(c *gin.Context) {
	ac, ok := middleware.GetAuth(c)
	if !ok {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	ctx, cancel := context.WithTimeout(c.Request.Context(), 5*time.Second)
	defer cancel()

	var email, role, displayName string
	err := h.DB.QueryRow(ctx, `
		select u.email, p.role, coalesce(p.display_name,'')
		from users u
		join profiles p on p.user_id = u.id
		where u.id = $1
	`, ac.UserID).Scan(&email, &role, &displayName)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"id":           ac.UserID,
		"email":        email,
		"display_name": displayName,
		"role":         role,
	})
}

func nullIfEmpty(s string) any {
	if strings.TrimSpace(s) == "" {
		return nil
	}
	return s
}
