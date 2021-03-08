import { Router } from 'express';
import StudentPhoneController from '../controllers/StudentPhoneController';

const routes = new Router();

routes.get('/student/:studentId/phone', StudentPhoneController.index);
routes.get('/student/:studentId/phone/:id', StudentPhoneController.show);
routes.post('/student/:studentId/phone', StudentPhoneController.store);
routes.put('/student/:studentId/phone/:id', StudentPhoneController.update);
routes.delete('/student/:studentId/phone/:id', StudentPhoneController.delete);

export default routes;
