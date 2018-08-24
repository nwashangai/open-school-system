import express from 'express';
import studentRoutes from './studentRoutes';
import teacherRoutes from './teacherRoutes';
import UserController from '../../controllers/UserController';

const router = express.Router();

router.post('/user/login', UserController.login);
router.use('/student/', studentRoutes);
router.use('/teacher/', teacherRoutes);

export default router;
