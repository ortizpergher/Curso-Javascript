import axios from 'axios';
import BaseService from './BaseService';

class CharactersService extends BaseService {
  constructor() {
    super();

  }

  async getCharacters(page, title) {
    const offset = (page -1 ) * this.limit;
    let url = `${this.baseUrl}/characters?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}&limit=30&offset=${offset}`;

    if (title !== undefined) {
      url += `&nameStartsWith=${title}`;
    }

    const response = await axios.get(url);

    return {
      current_page: parseInt(page),
      total_pages: Math.ceil(response.data.data.total / this.limit),
      data: response.data.results,
    };
  }

  async getCharacter(id) {
    const url = `${this.baseUrl}/characters/${id}?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}`;
    const response = await axios.get(url);

    return {
      data: response.data.data.results.length > 0
        ? response.data.data.results[0]
        : null,
    };
  }
}

export default new CharactersService();
