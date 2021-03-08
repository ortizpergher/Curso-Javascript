import StudentGradeService from '../services/StudentGradeService';
import StudentGrade from '../models/StudentGrade';

const service = new StudentGradeService();

class StudentGradeController {
  async index(request, response) {
    const { studentId } = request.params;
    return response.json(
      await StudentGrade.findAll({
        where: {
          student_id: studentId,
        },
      })
    );
  }

  async show(request, response) {
    const { studentId, id } = request.params;

    return response.json(
      await StudentGrade.findByPk(id, {
        where: {
          student_id: studentId,
        },
      })
    );
  }

  async store(request, response) {
    const { studentId } = request.params;

    const { descricao, nota, materiaId } = request.body;

    const errors = [];

    if (!descricao) {
      errors.push({ error: 'Descrição não infomado! Informação obrigatória.' });
    }

    if (!nota) {
      errors.push({ error: 'Nota não informada' });
    }

    if (!materiaId) {
      errors.push({ error: 'ID da matéria não informado' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    response.json(await service.post(descricao, nota, studentId, materiaId));
  }

  async update(request, response) {
    const { studentId, id } = request.params;

    response.json(await service.put(studentId, id, request.body));
  }

  async delete(request, response) {
    const { studentId, id } = request.params;
    response.json(await service.delete(studentId, id));

    return response.sendStatus(202);
  }
}

export default new StudentGradeController();
