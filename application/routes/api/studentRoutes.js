import express from 'express';
import StudentController from '../../controllers/StudentController';
import auth from '../../middlewares/passport';
import { checkInput } from '../../middlewares/validate';

const router = express.Router();

router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, checkInput, StudentController.setStudent);

export default router;
