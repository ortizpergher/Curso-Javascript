import { Router } from 'express';
import TeacherController from '../controllers/TeacherController';

const routes = new Router();

routes.get('/teacher', TeacherController.index);
routes.get('/teacher/:id', TeacherController.show);
routes.post('/teacher', TeacherController.store);
routes.put('/teacher/:id', TeacherController.update);
routes.delete('/teacher/:id', TeacherController.delete);

export default routes;
