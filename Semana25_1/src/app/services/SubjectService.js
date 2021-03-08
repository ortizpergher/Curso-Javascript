import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class SubjectService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute(
      'select * from materia',
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async getById(id) {
    const result = await this.execute(
      `select * from materia where id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async post(nome) {
    const insert = await this.execute(
      `insert into materia(nome) values ('${nome}') returning *`,
      QueryTypes.INSERT
    );
    return insert;
  }

  async put(id, values) {
    const set = [];
    Object.keys(values).forEach(item => {
      set.push(`${item} = '${values[item]}'`);
    });

    const update = await this.execute(
      `UPDATE materia SET ${set} where id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(id) {
    const result = await this.execute(
      `DELETE FROM materia where id = ${id}`,
      QueryTypes.DELETE
    );

    return result;
  }
}
