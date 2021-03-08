import Teacher from '../models/Teacher';

class TeacherController {
  async index(request, response) {
    return response.json(
      await Teacher.findAndCountAll({
        attributes: ['name', 'age', 'city', 'state', 'country', 'subject_id'],
        order: ['name'],
      })
    );
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await Teacher.findByPk(id));
  }

  async store(request, response) {
    const { name, age, city, state, country, subjectId } = request.body;

    return response.json(
      await Teacher.create({
        name,
        age,
        city,
        state,
        country,
        subject_id: subjectId,
      })
    );
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, age, city, state, country, subjectId } = request.body;
    const updateTeacher = await Teacher.update(
      { name, age, city, state, country, subject_id: subjectId },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    return response.json(updateTeacher);
  }

  async delete(request, response) {
    const { id } = request.params;
    await Teacher.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(202);
  }
}

export default new TeacherController();
