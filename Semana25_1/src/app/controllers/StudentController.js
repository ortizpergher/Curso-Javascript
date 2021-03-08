import StudentService from '../services/StudentService';
import Student from '../models/Student';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    return response.json(await Student.findAll());
    // return response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params; // params -> parametro da rota
    return response.json(await Student.findByPk(id));
  }

  async store(request, response) {
    const { nome, idade, turmaId, dataNascimento } = request.body;

    const errors = [];

    if (!nome) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória.' });
    }

    if (!idade && (idade < 0 || idade > 150)) {
      errors.push({ error: 'Idade inválida' });
    }

    if (!turmaId) {
      errors.push({ error: 'Turma não informada' });
    }

    if (!dataNascimento) {
      errors.push({ error: 'Data de nascimento não informada' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    return response.json(
      await service.post(nome, idade, turmaId, dataNascimento)
    );
  }

  async update(request, response) {
    const { id } = request.params;

    return response.json(await service.put(id, request.body));
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new StudentController();
