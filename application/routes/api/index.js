import express from 'express';
import multer from 'multer';
import auth from '../../middlewares/passport';
import studentRoutes from './studentRoutes';
import teacherRoutes from './teacherRoutes';
import staffRoutes from './staffRoutes';
import guardianRoutes from './guardianRoutes';
import UserController from '../../controllers/UserController';
import { checkInput, avatarFilter } from '../../middlewares/validate';

const router = express.Router();
const upload = multer({
  dest: './uploads/avatar/',
  fileFilter: avatarFilter,
  limits: {
    fileSize: 1024 * 1024
  }
});

router.post('/user/login', checkInput, UserController.login);
router.post('/user/requestPasswordReset', checkInput, UserController.requestPasswordReset);
router.put('/user/resetPassword', checkInput, UserController.passwordReset);
router.post('/user/upload', checkInput, auth, upload.single('avatar'), UserController.avatarUpload);

router.use('/student/', studentRoutes);
router.use('/teacher/', teacherRoutes);
router.use('/staff/', staffRoutes);
router.use('/guardian/', guardianRoutes);

export default router;
