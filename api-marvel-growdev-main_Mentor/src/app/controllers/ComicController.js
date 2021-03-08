import ComicService from '../services/ComicService';

class ComicController {
  async show(request, response) {
    const { id } = request.params;
    const data = await ComicService.getComic(id);

    return response.json(data);
  }
}

export default new ComicController();
