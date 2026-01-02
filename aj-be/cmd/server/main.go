package main

import (
	"log"

	"aj-be/config"
	"aj-be/internal/database"
	"aj-be/internal/handlers"
	"aj-be/internal/middleware"

	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.Load()

	pool, err := db.NewPool(cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("db connect failed: %v", err)
	}
	defer pool.Close()

	r := gin.Default()

	// health
	r.GET("/health", func(c *gin.Context) { c.JSON(200, gin.H{"ok": true}) })

	authH := handlers.NewAuthHandler(pool, cfg)

	// public
	r.POST("/auth/register", authH.Register)
	r.POST("/auth/login", authH.Login)

	// protected
	protected := r.Group("/")
	protected.Use(middleware.RequireAuth(cfg.JWTSecret))
	protected.GET("/me", authH.Me)

	log.Printf("listening on :%s", cfg.AppPort)
	if err := r.Run(":" + cfg.AppPort); err != nil {
		log.Fatal(err)
	}
}
