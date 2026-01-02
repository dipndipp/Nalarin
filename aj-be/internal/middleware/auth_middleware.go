package middleware

import (
	"net/http"
	"strings"

	"aj-be/internal/utils"
	"github.com/gin-gonic/gin"
)

type AuthContext struct {
	UserID string
	Role   string
}

const authCtxKey = "auth"

func RequireAuth(jwtSecret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		h := c.GetHeader("Authorization")
		if h == "" || !strings.HasPrefix(h, "Bearer ") {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing bearer token"})
			return
		}

		tokenStr := strings.TrimPrefix(h, "Bearer ")
		claims, err := utils.ParseJWT(tokenStr, jwtSecret)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
			return
		}

		c.Set(authCtxKey, AuthContext{
			UserID: claims.Subject,
			Role:   claims.Role, // "learner" or "mentor"
		})
		c.Next()
	}
}

func RequireRole(required string) gin.HandlerFunc {
	return func(c *gin.Context) {
		v, ok := c.Get(authCtxKey)
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			return
		}
		ac := v.(AuthContext)
		if ac.Role != required {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "forbidden"})
			return
		}
		c.Next()
	}
}

func GetAuth(c *gin.Context) (AuthContext, bool) {
	v, ok := c.Get(authCtxKey)
	if !ok {
		return AuthContext{}, false
	}
	return v.(AuthContext), true
}
