import TeacherService from '../services/TeacherService';
import Teacher from '../models/Teacher';

const service = new TeacherService();

class TeacherController {
  async index(request, response) {
    return response.json(await Teacher.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await Teacher.findByPk(id));
  }

  async store(request, response) {
    const { nome, idade, cidade, uf, pais, materiaId } = request.body;

    const errors = [];

    if (!nome) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória' });
    }

    if (!idade) {
      errors.push({ error: 'Idade não informada' });
    }

    if (!cidade) {
      errors.push({ error: 'Cidade não informada' });
    }

    if (!uf) {
      errors.push({ error: 'UF não informada' });
    }

    if (!pais) {
      errors.push({ error: 'País não informado' });
    }

    if (!materiaId) {
      errors.push({ error: 'ID da matéria não informado' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    return response.json(
      await service.post(nome, idade, cidade, uf, pais, materiaId)
    );
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

export default new TeacherController();
