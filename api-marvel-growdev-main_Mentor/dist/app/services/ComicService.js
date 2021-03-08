"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _BaseService = require('./BaseService'); var _BaseService2 = _interopRequireDefault(_BaseService);

class ComicService extends _BaseService2.default {
  constructor() {
    super();
  }

  async getComic(id) {
    const url = `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}`;
    const response = await _axios2.default.get(url);

    return {
      data:
        response.data.data.results.length > 0
          ? response.data.data.results[0]
          : null,
    };
  }
}

exports. default = new ComicService();
