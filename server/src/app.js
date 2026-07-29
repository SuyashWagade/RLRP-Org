import express from 'express';
import cors from 'cors';
import path from 'path';
import apiRoutes from './routes/apiRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded static files
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// API Routes
app.use('/api', apiRoutes);

// Root Health Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RLRP Savali Niwara Kendra NGO API Server' });
});

// 404 Handler
app.use(notFoundHandler);

// Centralized Error Handler
app.use(errorHandler);

export default app;
