"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _charactersController = require('./app/controllers/charactersController'); var _charactersController2 = _interopRequireDefault(_charactersController);
var _logRequest = require('./app/middlewares/logRequest'); var _logRequest2 = _interopRequireDefault(_logRequest);

const routes = new (0, _express.Router)();

routes.use(_logRequest2.default);

routes.get("/characters", _charactersController2.default.getCharacters);
routes.get("/characters/name", _charactersController2.default.getCharactersByName);
routes.get("/characters/character", _charactersController2.default.getCharacterById);



exports. default = routes;
