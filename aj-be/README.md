# AJ-BE - Backend API

Backend API untuk aplikasi Ajarin, dibangun dengan Go, Gin Framework, dan PostgreSQL.

## 🚀 Tech Stack

- **Go** 1.24+
- **Gin** - Web framework
- **PostgreSQL** - Database
- **pgx/v5** - PostgreSQL driver
- **JWT** - Authentication
- **godotenv** - Environment configuration

## 📋 Prerequisites

- Go 1.24 atau lebih tinggi
- PostgreSQL 14+
- Git

## 🛠️ Installation

1. Clone repository:
```bash
git clone <repository-url>
cd aj-be
```

2. Install dependencies:
```bash
go mod download
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Edit file `.env` dengan konfigurasi Anda:
```env
APP_PORT=8080
DATABASE_URL=postgresql://username:password@localhost:5432/database_name?sslmode=disable
JWT_SECRET=your-super-secret-jwt-key
```

5. Setup database:
- Buat database PostgreSQL
- Jalankan migrasi (jika ada)

## 🏃 Running the Application

Development mode:
```bash
go run cmd/server/main.go
```

Build dan run:
```bash
go build -o bin/server cmd/server/main.go
./bin/server
```

## 📚 API Endpoints

### Public Endpoints

- `GET /health` - Health check
- `POST /auth/register` - Register user baru
- `POST /auth/login` - Login user

### Protected Endpoints (Requires JWT)

- `GET /me` - Get current user info

## 🔐 Authentication

API menggunakan JWT (JSON Web Token) untuk authentication. Setelah login, gunakan token yang diterima di header:

```
Authorization: Bearer <your-token>
```

## 📁 Project Structure

```
aj-be/
├── cmd/
│   └── server/
│       └── main.go          # Entry point
├── config/
│   └── config.go            # Configuration loader
├── internal/
│   ├── database/            # Database connection
│   ├── handlers/            # HTTP handlers
│   ├── middleware/          # Middleware (auth, etc)
│   ├── models/              # Data models
│   ├── repository/          # Database queries
│   ├── services/            # Business logic
│   └── utils/               # Utility functions
├── .env.example             # Environment template
├── .gitignore
├── go.mod
└── README.md
```

## 🧪 Testing

```bash
go test ./...
```

## 📝 License

[Your License]

## 👥 Contributors

[Your Name]
