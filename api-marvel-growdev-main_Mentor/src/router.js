import { Router } from 'express';
import CharacterController from './app/controllers/CharacterController';
import ComicController from './app/controllers/ComicController';
import LogMiddleware from './app/middlewares/LogMiddleware';

const routes = new Router();

routes.use(LogMiddleware.register);

routes.get('/character', CharacterController.index);
routes.get('/character/:id', CharacterController.show);

routes.get('/comic/:id', ComicController.show);

export default routes;
