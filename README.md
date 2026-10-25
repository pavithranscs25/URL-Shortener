# SnipURL — URL Shortener

A full-stack URL shortener built with React, Node.js, Express, and PostgreSQL. Convert long URLs into short links and redirect users to the original destination with ease.

🔗 **Live Demo:** [SnipURL](https://snip-url-mu.vercel.app/)

## ✨ Features

- Shorten long URLs into compact links.
- Redirect short links to their original URLs.
- Store URL mappings in a PostgreSQL database.
- Track the number of clicks on shortened URLs.
- Validate URLs and handle invalid requests.
- Responsive frontend interface.
- Deployed frontend and backend.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- REST API

**Database**
- PostgreSQL (Neon)

**Deployment**
- Vercel

## ⚙️ How It Works

1. Enter a long URL in SnipURL.
2. The frontend sends a request to the backend API.
3. The backend validates the URL and generates a short code.
4. The URL mapping is stored in PostgreSQL.
5. Open the generated short link to redirect to the original URL.

## 🚀 Run Locally

### Prerequisites

- Node.js and npm
- A PostgreSQL database (or a Neon database)

### 1. Clone the repository

```bash
git clone https://github.com/pavithranscs25/URL-Shortener.git
cd URL-Shortener
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=3000
```

Start the backend:

```bash
node server.js
```

The backend runs locally at `http://localhost:3000`.

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

> Note: The frontend API configuration must point to your local backend (`http://localhost:3000`) when running locally. The deployed frontend uses the deployed backend URL.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `PORT` | Local backend port; defaults to `3000` |

**Security:** Never commit `.env` files, database credentials, or other secrets to GitHub.

## 🌐 Live Deployment

- **Frontend:** [snip-url-mu.vercel.app](https://snip-url-mu.vercel.app/)
- **Backend:** [snip-url-backend-zeta.vercel.app](https://snip-url-backend-zeta.vercel.app/)

## 👨‍💻 Author

**Pavithran S**

- GitHub: [@pavithranscs25](https://github.com/pavithranscs25)

---

Built as a full-stack web development project to learn REST APIs, database integration, and deployment.
