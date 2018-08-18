import express from 'express';
import apiRoutes from './api';
import websiteRoutes from './website';

const router = express.Router();

router.use('/api/v1/', apiRoutes);
router.use('/', websiteRoutes);

export default router;
