"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _CharacterService = require('../services/CharacterService'); var _CharacterService2 = _interopRequireDefault(_CharacterService);

class CharacterController {
  async index(request, response) {
    const { page, title } = request.query;
    const data = await _CharacterService2.default.getCharacters(_nullishCoalesce(page, () => ( 1)), title);

    return response.json(data);
  }

  async show(request, response) {
    const { id } = request.params;
    const data = await _CharacterService2.default.getCharacter(id);

    return response.json(data);
  }
}

exports. default = new CharacterController();
