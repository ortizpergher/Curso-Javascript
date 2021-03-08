import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('SELECT * FROM aluno', QueryTypes.SELECT);

    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async getById(id) {
    const result = await this.execute(
      `SELECT * FROM aluno WHERE id = ${id}`,
      QueryTypes.SELECT
    );

    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async post(nome, idade, turmaId, dataNascimento) {
    const insert = await this.execute(
      `INSERT INTO aluno(nome, idade, turma_id, data_nascimento) 
        VALUES ('${nome}', ${idade}, ${turmaId}, '${dataNascimento}') returning *`,
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
      `UPDATE aluno SET ${set} WHERE id = ${id} returning *`,
      QueryTypes.UPDATE
    );

    return update;
  }

  async delete(id) {
    await this.execute(
      `DELETE FROM aluno_nota WHERE aluno_id = ${id}`,
      QueryTypes.DELETE
    );
    await this.execute(
      `DELETE FROM aluno_telefone WHERE aluno_id = ${id}`,
      QueryTypes.DELETE
    );
    await this.execute(`DELETE FROM aluno WHERE id = ${id}`, QueryTypes.DELETE);
  }
}
