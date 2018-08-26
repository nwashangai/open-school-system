import express from 'express';
import StaffController from '../../controllers/StaffController';
import auth from '../../middlewares/passport';
import { checkInput } from '../../middlewares/validate';

const router = express.Router();

// router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, checkInput, StaffController.setStaff);

export default router;
