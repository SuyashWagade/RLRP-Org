import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Root Health Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RLRP Organization API Server' });
});

// Error Handler
app.use(errorHandler);

export default app;
