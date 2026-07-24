# RLRP Organization Web Application

Modern full-stack web platform built with **React (Vite)** frontend and **Node.js (Express)** backend.

## Project Structure

```
RLRP-Org/
├── public/                  # Public static assets & metadata
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── images/
├── src/                     # React Frontend Source Code
│   ├── assets/              # Static media, icons, logos, fonts
│   ├── components/          # Reusable components
│   │   ├── common/          # Atomic/Shared components (Navbar, Footer, Card, etc.)
│   │   └── [feature]/       # Feature-specific components (home, blog, events, etc.)
│   ├── pages/               # Page view components mapped to router
│   ├── layouts/             # Page layout wrappers (MainLayout)
│   ├── routes/              # Centralized route definitions (AppRoutes)
│   ├── services/            # API integration & data services
│   ├── hooks/               # Custom React hooks (useFetch, usePagination, etc.)
│   ├── context/             # React Context Providers (ThemeContext)
│   ├── utils/               # Constants, helpers, validators, formatters
│   ├── styles/              # Global styles, CSS variables, typography
│   ├── App.jsx              # Main App wrapper
│   ├── main.jsx             # React entrypoint
│   └── index.css            # Root stylesheet import
├── server/                  # Node.js + Express Backend
│   ├── src/
│   │   ├── config/          # Database & environment configurations
│   │   ├── controllers/     # Route controllers logic
│   │   ├── middleware/      # Middleware functions (error handler, CORS, auth)
│   │   ├── models/          # Data schemas/models
│   │   ├── routes/          # Express route endpoints
│   │   ├── app.js           # Express app setup
│   │   └── server.js        # Server entrypoint
│   └── package.json         # Backend dependencies
├── package.json             # Root frontend dependencies & scripts
├── vite.config.js           # Vite bundler config with alias & proxy setup
└── README.md
```

## Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

1. Install frontend dependencies:
   ```bash
   npm install
   ```

2. Install backend dependencies:
   ```bash
   cd server && npm install && cd ..
   ```

### Running the Application

- **Frontend Development Server**:
  ```bash
  npm run dev
  ```
  App will open at `http://localhost:3000`.

- **Backend Development Server**:
  ```bash
  npm run dev:server
  ```
  Backend will run at `http://localhost:5000`.

- **Build Production Frontend**:
  ```bash
  npm run build
  ```
