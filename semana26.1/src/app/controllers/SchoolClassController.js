import SchoolClass from '../models/SchoolClass';

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
    const { code, startedAt, finishedAt } = request.body;

    const errors = [];

    if (!code) {
      errors.push({ error: 'Código não infomado! Informação obrigatória' });
    }

    if (!startedAt) {
      errors.push({ error: 'Data de início não informada' });
    }

    if (!finishedAt) {
      errors.push({ error: 'Data de término não informada' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    return response.json(await SchoolClass.create(
      {
        code, started_at: startedAt, finished_at: finishedAt
      }
    ));
  }

  async update(request, response) {
    const { id } = request.params;
    const { code, startedAt, finishedAt } = request.body;

    return response.json(await SchoolClass.update(
      {code, started_at: startedAt, finished_at: finishedAt},
      {
        where: {
          id,
        },
        returning: true
      }
    ));
  }

  async delete(request, response) {
    const { id } = request.params;
    return response.json(await SchoolClass.destroy({
        where: {
          id,
        }
      })
    );
  }
}

export default new SchoolClassController();
