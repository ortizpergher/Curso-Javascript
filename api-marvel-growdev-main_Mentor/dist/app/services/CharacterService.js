"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _BaseService = require('./BaseService'); var _BaseService2 = _interopRequireDefault(_BaseService);

class CharacterService extends _BaseService2.default {
  constructor() {
    super();
  }

  async getCharacters(page, title) {
    const offset = (page - 1) * this.limit;
    let url = `https://gateway.marvel.com/v1/public/characters?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}&limit=${this.limit}&offset=${offset}`;

    if (title !== undefined) {
      url += `&nameStartsWith=${title}`;
    }

    const response = await _axios2.default.get(url);

    return {
      current_page: page,
      total_pages: Math.ceil(response.data.data.total / this.limit),
      data: response.data.data.results,
    };
  }

  async getCharacter(id) {
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}`;
    const response = await _axios2.default.get(url);

    return {
      data:
        response.data.data.results.length > 0
          ? response.data.data.results[0]
          : null,
    };
  }
}

exports. default = new CharacterService();
