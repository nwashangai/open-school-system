import express from 'express';
import TeacherController from '../../controllers/TeacherController';
import auth from '../../middlewares/passport';
import { checkInput } from '../../middlewares/validate';

const router = express.Router();

// router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, checkInput, TeacherController.setTeacher);

export default router;
