import PhoneType from '../models/PhoneType';

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
    const { name } = request.body;

    const errors = [];

    if (!name) {
      errors.push({ error: 'Nome não infomado! Informação obrigatória' });
    }

    if (errors.length > 0) {
      return response.status(400).json(errors);
    }

    return response.json(await PhoneType.create({name}));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    response.json(await PhoneType.update({ name }, {
          where: {
            id,
          },
          returning: true
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    response.json(await PhoneType.destroy({
      where: {
        id,
      }
    }));
  }
}

export default new PhoneTypeController();
