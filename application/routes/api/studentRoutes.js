import express from 'express';
import StudentController from '../../controllers/StudentController';

const router = express.Router();

router.get('/', StudentController.getStudents);
router.post('/create', StudentController.setStudent);

export default router;
