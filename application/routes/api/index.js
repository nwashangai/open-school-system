import express from 'express';
import studentRoutes from './studentRoutes';
import teacherRoutes from './teacherRoutes';
import staffRoutes from './staffRoutes';
import guardianRoutes from './guardianRoutes';
import UserController from '../../controllers/UserController';
import { checkInput } from '../../middlewares/validate';

const router = express.Router();

router.post('/user/login', checkInput, UserController.login);
router.post('/user/requestPasswordReset', checkInput, UserController.requestPasswordReset);
router.put('/user/resetPassword', checkInput, UserController.passwordReset);
router.use('/student/', studentRoutes);
router.use('/teacher/', teacherRoutes);
router.use('/staff/', staffRoutes);
router.use('/guardian/', guardianRoutes);

export default router;
