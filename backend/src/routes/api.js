import express from 'express';
import { getPrograms, getProgramBySlug } from '../controllers/programController.js';
import { getImpactStats } from '../controllers/impactController.js';
import { createContactInquiry } from '../controllers/contactController.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'RLRP Backend API', version: '1.0.0' });
});

router.get('/programs', getPrograms);
router.get('/programs/:slug', getProgramBySlug);
router.get('/impact', getImpactStats);
router.post('/contact', createContactInquiry);

export default router;
