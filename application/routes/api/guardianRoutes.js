import express from 'express';
import GuardianController from '../../controllers/GuardianController';
import auth from '../../middlewares/passport';
import { checkInput } from '../../middlewares/validate';

const router = express.Router();

// router.get('/', auth, StudentController.getStudents);
router.post('/create', auth, checkInput, GuardianController.setGuardian);

export default router;
