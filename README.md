# SnipURL 🔗

A full-stack URL shortener that converts long URLs into short links and redirects users to their original destinations.

## ✨ Features

- Shorten long URLs into compact links.
- Store short codes and original URLs in PostgreSQL.
- Redirect users to the original URL.
- Validate URL formats and allow only HTTP/HTTPS URLs.
- Handle unknown short codes with a 404 response.
- Track link clicks.
- Retry short-code generation when a duplicate code is encountered.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- PostgreSQL
- Neon

## 📁 Project Structure

```text
SnipURL/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- A PostgreSQL database (Neon can be used)

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd SnipURL
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
```

Replace the database connection string with your own Neon PostgreSQL connection string. Never commit your `.env` file or expose database credentials.

### 3. Start the backend

```bash
node server.js
```

The backend runs at `http://localhost:3000`.

### 4. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal, usually `http://localhost:5173`.

## 🔄 How It Works

1. Enter a long URL in the frontend.
2. The frontend sends a request to the backend API.
3. The backend validates the URL and generates a short code.
4. The short code and original URL are saved in PostgreSQL.
5. Opening the short link redirects the user to the original destination.
6. Each successful redirect increments the click count.

## 🚀 Future Improvements

- Deploy the frontend and backend.
- Display click analytics in the frontend.
- Support custom short links.
- Add link expiration options.

## 📄 License

A license has not been selected yet.
