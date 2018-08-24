import express from 'express';
import TeacherController from '../../controllers/TeacherController';
import auth from '../../middlewares/passport';

const router = express.Router();

// router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, TeacherController.setTeacher);

export default router;
