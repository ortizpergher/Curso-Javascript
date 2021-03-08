import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class TeacherService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute(
      'select * from professor',
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      item.cidade = item.cidade.trim();
      item.pais = item.pais.trim();
      return item;
    });
  }

  async getById(id) {
    const result = await this.execute(
      `select * from professor where id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      item.cidade = item.cidade.trim();
      item.pais = item.pais.trim();
      return item;
    });
  }

  async post(nome, idade, cidade, uf, pais, materiaId) {
    const insert = await this.execute(
      `insert into professor(nome, idade, cidade, uf, pais, materia_id) 
        values ('${nome}', ${idade}, '${cidade}', '${uf}', '${pais}', ${materiaId}) returning *`,
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
      `UPDATE professor SET ${set} where id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(id) {
    const result = await this.execute(
      `DELETE FROM professor where id = ${id}`,
      QueryTypes.DELETE
    );

    return result;
  }
}
