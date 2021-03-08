import { Router } from 'express';
import StudentGradeController from '../controllers/StudentGradeController';

const routes = new Router();

routes.get('/student/:studentId/grade', StudentGradeController.index);
routes.get('/student/:studentId/grade/:id', StudentGradeController.show);
routes.post('/student/:studentId/grade', StudentGradeController.store);
routes.put('/student/:studentId/grade/:id', StudentGradeController.update);
routes.delete('/student/:studentId/grade/:id', StudentGradeController.delete);

export default routes;
