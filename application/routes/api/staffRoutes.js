import express from 'express';
import StaffController from '../../controllers/StaffController';
import auth from '../../middlewares/passport';

const router = express.Router();

// router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, StaffController.setStaff);

export default router;
