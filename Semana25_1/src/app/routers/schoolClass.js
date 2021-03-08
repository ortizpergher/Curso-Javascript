import { Router } from 'express';
import ClassController from '../controllers/SchoolClassController';

const routes = new Router();

routes.get('/schoolClass', ClassController.index);
routes.get('/schoolClass/:id', ClassController.show);
routes.post('/schoolClass', ClassController.store);
routes.put('/schoolClass/:id', ClassController.update);
routes.delete('/schoolClass/:id', ClassController.delete);

export default routes;
