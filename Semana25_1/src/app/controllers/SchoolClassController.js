import SchoolClassService from '../services/SchoolClassService';
import SchoolClass from '../models/SchoolClass';

const service = new SchoolClassService();

class SchoolClassController {
  async index(request, response) {
    return response.json(await SchoolClass.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await SchoolClass.findByPk(id));
  }

  // eslint-disable-next-line consistent-return
  async store(request, response) {
    const { codigo, dataInicio, dataFim } = request.body;

    const errors = [];

    if (!codigo) {
      errors.push({ error: 'Código não infomado! Informação obrigatória' });
    }

    if (!dataInicio) {
      errors.push({ error: 'Data de início não informada' });
    }

    if (!dataFim) {
      errors.push({ error: 'Data de término não informada' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    response.json(await service.post(codigo, dataInicio, dataFim));
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

export default new SchoolClassController();
