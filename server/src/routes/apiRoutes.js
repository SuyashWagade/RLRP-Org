import express from 'express';
import { login, registerAdmin, getMe } from '../controllers/authController.js';
import { getPrograms, getProgramById, createProgram, updateProgram, deleteProgram } from '../controllers/programController.js';
import { getDonations, createDonation, getDonationStats } from '../controllers/donationController.js';
import { registerVolunteer, getVolunteers, updateVolunteerStatus } from '../controllers/volunteerController.js';
import { getBlogPosts, getBlogPostBySlug, createBlogPost, deleteBlogPost } from '../controllers/blogController.js';
import { getEvents, createEvent } from '../controllers/eventController.js';
import { getGalleryImages, uploadGalleryImage } from '../controllers/galleryController.js';
import { submitContactForm, getContactMessages } from '../controllers/contactController.js';
import { authenticateToken, requireRole } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Health Check
router.get('/health', (req, res) => res.json({ status: 'OK', message: 'RLRP API Operational' }));

// Auth Routes
router.post('/auth/login', login);
router.post('/auth/register', registerAdmin);
router.get('/auth/me', authenticateToken, getMe);

// Program Routes
router.get('/programs', getPrograms);
router.get('/programs/:id', getProgramById);
router.post('/programs', authenticateToken, requireRole('ADMIN'), upload.single('image'), createProgram);
router.put('/programs/:id', authenticateToken, requireRole('ADMIN'), upload.single('image'), updateProgram);
router.delete('/programs/:id', authenticateToken, requireRole('ADMIN'), deleteProgram);

// Donation Routes
router.get('/donations', getDonations);
router.post('/donations', createDonation);
router.get('/donations/stats', getDonationStats);

// Volunteer Routes
router.post('/volunteers', registerVolunteer);
router.get('/volunteers', authenticateToken, getVolunteers);
router.patch('/volunteers/:id', authenticateToken, updateVolunteerStatus);

// Blog Routes
router.get('/blog', getBlogPosts);
router.get('/blog/:slug', getBlogPostBySlug);
router.post('/blog', authenticateToken, requireRole('ADMIN'), upload.single('image'), createBlogPost);
router.delete('/blog/:id', authenticateToken, requireRole('ADMIN'), deleteBlogPost);

// Event Routes
router.get('/events', getEvents);
router.post('/events', authenticateToken, requireRole('ADMIN'), upload.single('image'), createEvent);

// Gallery Routes
router.get('/gallery', getGalleryImages);
router.post('/gallery', authenticateToken, requireRole('ADMIN'), upload.single('image'), uploadGalleryImage);

// Contact Routes
router.post('/contact', submitContactForm);
router.get('/contact', authenticateToken, getContactMessages);

export default router;
