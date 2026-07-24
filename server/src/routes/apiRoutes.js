import express from 'express';
import { getHealthStatus } from '../controllers/healthController.js';
import { getBlogs, getBlogById } from '../controllers/blogController.js';
import { handleDonation } from '../controllers/donationController.js';

const router = express.Router();

router.get('/health', getHealthStatus);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.post('/donations', handleDonation);

export default router;
