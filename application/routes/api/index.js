import express from 'express';
import studentRoutes from './studentRoutes';
import UserController from '../../controllers/UserController';

const router = express.Router();

router.post('/user/login', UserController.login);
router.use('/student/', studentRoutes);

export default router;
