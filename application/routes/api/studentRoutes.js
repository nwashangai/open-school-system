import express from 'express';
import StudentController from '../../controllers/StudentController';
import auth from '../../middlewares/passport';

const router = express.Router();

router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, StudentController.setStudent);

export default router;
