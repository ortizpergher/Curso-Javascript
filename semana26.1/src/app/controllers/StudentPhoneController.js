import StudentPhone from '../models/StudentPhone';

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

    const { number, typeId } = request.body;

    const errors = [];

    if (!number) {
      errors.push({ error: 'Número não infomado! Informação obrigatória.' });
    }

    if (!typeId) {
      errors.push({ error: 'Tipo não informado' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }
    return response.json(
      await StudentPhone.create({
        number,
        student_id: studentId,
        type_id: typeId,
      })
    );
  }

  async update(request, response) {
    const { studentId, id } = request.params;
    const { number, typeId } = request.body;

    return response.json(
      await StudentPhone.update(
        { number, type_id: typeId },
        {
          where: {
            id,
            student_id: studentId,
          },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { studentId, id } = request.params;
    await StudentPhone.destroy({
      where: {
        student_id: studentId,
        id,
      },
    });

    return response.sendStatus(202);
  }
}

export default new StudentPhoneController();
