import express from 'express';
import studentRoutes from './studentRoutes';

const router = express.Router();

router.use('/student/', studentRoutes);

export default router;
