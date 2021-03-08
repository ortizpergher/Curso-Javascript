import Subject from '../models/Subject';

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
    const { name } = request.body;

    const errors = [];

    if (!name) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória' });
    }

    return response.json(await Subject.create({ name }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    return response.json(
      await Subject.update(
        { name },
        {
          where: {
            id,
          },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    return response.json(
      await Subject.destroy({
        where: {
          id,
        },
      })
    );
  }
}

export default new SubjectController();
