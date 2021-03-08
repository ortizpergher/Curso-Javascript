"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ComicService = require('../services/ComicService'); var _ComicService2 = _interopRequireDefault(_ComicService);

class ComicController {
  async show(request, response) {
    const { id } = request.params;
    const data = await _ComicService2.default.getComic(id);

    return response.json(data);
  }
}

exports. default = new ComicController();
