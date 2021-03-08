import axios from 'axios';
import BaseService from './BaseService';

class ComicService extends BaseService {
  constructor() {
    super();

  }

  async getComic(id) {
    const url = `${this.baseUrl}/comics/${id}?apikey=${this.apikey}&hash=${this.hash}&ts=${this.ts}`;
    const response = await axios.get(url);

    return {
      data: response.data.data.results.length > 0
        ? response.data.data.results[0]
        : null,
    };
  }
}

export default new ComicService();
