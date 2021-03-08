import { Router } from 'express';
import PhoneTypeController from '../controllers/PhoneTypeController';

const routes = new Router();

routes.get('/phone-type', PhoneTypeController.index);
routes.get('/phone-type/:id', PhoneTypeController.show);
routes.post('/phone-type', PhoneTypeController.store);
routes.put('/phone-type/:id', PhoneTypeController.update);
routes.delete('/phone-type/:id', PhoneTypeController.delete);

export default routes;
