import SubjectService from '../services/SubjectService';
import Subject from '../models/Subject';

const service = new SubjectService();

class SubjectController {
  async index(request, response) {
    return response.json(await Subject.findAll());
    // response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await Subject.findByPk(id));
  }

  async store(request, response) {
    const { nome } = request.body;

    const errors = [];

    if (!nome) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória' });
    }

    return response.json(await service.post(nome));
  }

  async update(request, response) {
    const { id } = request.params;

    return response.json(await service.put(id, request.body));
  }

  async delete(request, response) {
    const { id } = request.params;
    return response.json(await service.delete(id));
  }
}

export default new SubjectController();
