import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentPhoneService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get(studentId) {
    const result = await this.execute(
      `select * from aluno_telefone WHERE aluno_id = ${studentId}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.numero = item.numero.trim();
      return item;
    });
  }

  async getById(studentId, id) {
    const result = await this.execute(
      `SELECT * FROM aluno_telefone WHERE aluno_id= ${studentId} and id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.numero = item.numero.trim();
      return item;
    });
  }

  async post(numero, alunoId, tipoId) {
    const insert = await this.execute(
      `insert into aluno_telefone(numero, aluno_id, tipo_id) 
        values ('${numero}', ${alunoId}, ${tipoId}) returning *`,
      QueryTypes.INSERT
    );
    return insert;
  }

  async put(studentId, id, values) {
    const set = [];
    Object.keys(values).forEach(item => {
      set.push(`${item} = '${values[item]}'`);
    });

    const update = await this.execute(
      `UPDATE aluno_telefone SET ${set} where aluno_id= ${studentId} and id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(studentId, id) {
    const result = await this.execute(
      `DELETE FROM aluno_telefone where aluno_id= ${studentId} and id = ${id}`,
      QueryTypes.DELETE
    );

    return result;
  }
}
