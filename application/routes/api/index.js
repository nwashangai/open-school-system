import express from 'express';
import studentRoutes from './studentRoutes';
import teacherRoutes from './teacherRoutes';
import staffRoutes from './staffRoutes';
import UserController from '../../controllers/UserController';

const router = express.Router();

router.post('/user/login', UserController.login);
router.use('/student/', studentRoutes);
router.use('/teacher/', teacherRoutes);
router.use('/staff/', staffRoutes);

export default router;
