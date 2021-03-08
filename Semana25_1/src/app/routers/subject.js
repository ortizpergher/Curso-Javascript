import { Router } from 'express';
import SubjectController from '../controllers/SubjectController';

const routes = new Router();

routes.get('/subject', SubjectController.index);
routes.get('/subject/:id', SubjectController.show);
routes.post('/subject', SubjectController.store);
routes.put('/subject/:id', SubjectController.update);
routes.delete('/subject/:id', SubjectController.delete);

export default routes;
