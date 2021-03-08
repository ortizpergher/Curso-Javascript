import StudentPhoneService from '../services/StudentPhoneService';
import StudentPhone from '../models/StudentPhone';

const service = new StudentPhoneService();

class StudentPhoneController {
  async index(request, response) {
    const { studentId } = request.params;
    return response.json(
      await StudentPhone.findAll({
        where: {
          student_id: studentId,
        },
      })
    );
  }

  async show(request, response) {
    const { studentId, id } = request.params;

    return response.json(
      await StudentPhone.findByPk(id, {
        where: {
          student_id: studentId,
        },
      })
    );
  }

  async store(request, response) {
    const { studentId } = request.params;

    const { numero, tipo_id } = request.body;

    const errors = [];

    if (!numero) {
      errors.push({ error: 'Número não infomado! Informação obrigatória.' });
    }

    if (!tipo_id) {
      errors.push({ error: 'Tipo não informado' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    response.json(await service.post(numero, studentId, tipo_id));
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

export default new StudentPhoneController();
