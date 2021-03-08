import PhoneTypeService from '../services/PhoneTypeService';
import PhoneType from '../models/PhoneType';

const service = new PhoneTypeService();

class PhoneTypeController {
  async index(request, response) {
    return response.json(await PhoneType.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await PhoneType.findByPk(id));
  }

  // eslint-disable-next-line consistent-return
  async store(request, response) {
    const { nome } = request.body;

    const errors = [];

    if (!nome) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    response.json(await service.post(nome));
  }

  async update(request, response) {
    const { id } = request.params;

    response.json(await service.put(id, request.body));
  }

  async delete(request, response) {
    const { id } = request.params;
    response.json(await service.delete(id));
  }
}

export default new PhoneTypeController();
