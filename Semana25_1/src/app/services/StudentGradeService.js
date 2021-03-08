import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentGradeService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get(studentId) {
    const result = await this.execute(
      `select * from aluno_nota WHERE aluno_id = ${studentId}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.descricao = item.descricao.trim();
      return item;
    });
  }

  async getById(studentId, id) {
    const result = await this.execute(
      `SELECT * FROM aluno_nota WHERE aluno_id= ${studentId} and id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.descricao = item.descricao.trim();
      return item;
    });
  }

  async post(descricao, nota, alunoId, materiaId) {
    const insert = await this.execute(
      `insert into aluno_nota(descricao, nota, aluno_id, materia_id) 
        values ('${descricao}', ${nota}, ${alunoId}, ${materiaId}) returning *`,
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
      `UPDATE aluno_nota SET ${set} where aluno_id= ${studentId} and id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(studentId, id) {
    const result = await this.execute(
      `DELETE FROM aluno_nota where aluno_id= ${studentId} and id = ${id}`,
      QueryTypes.DELETE
    );

    return result;
  }
}
