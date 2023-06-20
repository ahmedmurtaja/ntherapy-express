import { Router } from 'express';
import { getAppointments, updateAvailable } from '../controllers';
import { RolesForSelect } from '../types';
import { checkAuth } from '../middlewares';

const router = Router();
router.get('/:therapistId', getAppointments);
router.put('/:id', checkAuth(RolesForSelect.therapist), updateAvailable);

export default router;