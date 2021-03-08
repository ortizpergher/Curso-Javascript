"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CharacterController = require('./app/controllers/CharacterController'); var _CharacterController2 = _interopRequireDefault(_CharacterController);
var _ComicController = require('./app/controllers/ComicController'); var _ComicController2 = _interopRequireDefault(_ComicController);
var _LogMiddleware = require('./app/middlewares/LogMiddleware'); var _LogMiddleware2 = _interopRequireDefault(_LogMiddleware);

const routes = new (0, _express.Router)();

routes.use(_LogMiddleware2.default.register);

routes.get('/character', _CharacterController2.default.index);
routes.get('/character/:id', _CharacterController2.default.show);

routes.get('/comic/:id', _ComicController2.default.show);

exports. default = routes;
