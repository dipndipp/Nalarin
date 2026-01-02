package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	AppPort          string
	DatabaseURL      string
	JWTSecret        string
	JWTExpiresMin    int
	BcryptCost       int
}

func Load() Config {
	_ = godotenv.Load()

	cfg := Config{
		AppPort:     getEnv("APP_PORT", "8080"),
		DatabaseURL: mustEnv("DATABASE_URL"),
		JWTSecret:   mustEnv("JWT_SECRET"),
		JWTExpiresMin: getEnvInt("JWT_EXPIRES_MINUTES", 60),
		BcryptCost:  getEnvInt("BCRYPT_COST", 10),
	}

	return cfg
}

func mustEnv(key string) string {
	v := os.Getenv(key)
	if v == "" {
		log.Fatalf("missing env: %s", key)
	}
	return v
}

func getEnv(key, def string) string {
	v := os.Getenv(key)
	if v == "" {
		return def
	}
	return v
}

func getEnvInt(key string, def int) int {
	v := os.Getenv(key)
	if v == "" {
		return def
	}
	i, err := strconv.Atoi(v)
	if err != nil {
		return def
	}
	return i
}
