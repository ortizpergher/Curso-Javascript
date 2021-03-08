import { Router } from "express";
import CharactersController from "./app/controllers/charactersController";
import ComicController from "./app/controllers/ComicController";
import logRequest from "./app/middlewares/logRequest";

const routes = new Router();

routes.use(logRequest);

routes.get("/characters", CharactersController.getCharacters);
routes.get("/characters/name", CharactersController.getCharactersByName);
routes.get("/characters/character", CharactersController.getCharacterById);

routes.get('/comic/:id', ComicController.show);

export default routes;
