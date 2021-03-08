import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class SchoolClassService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from turma', QueryTypes.SELECT);

    return result.map(item => {
      item.codigo = item.codigo.trim();
      return item;
    });
  }

  async getById(id) {
    const result = await this.execute(
      `SELECT * FROM turma WHERE id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async post(codigo, dataInicio, dataFim) {
    const insert = await this.execute(
      `insert into turma(codigo, data_inicio, data_fim) 
        values ('${codigo}', '${dataInicio}', '${dataFim}')`,
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
      `UPDATE turma SET ${set} where id = ${id}`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(id) {
    const result = await this.execute(
      `DELETE FROM turma where id = ${id}`,
      QueryTypes.DELETE
    );

    return result;
  }
}
