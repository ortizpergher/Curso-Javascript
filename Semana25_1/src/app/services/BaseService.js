import Sequelize from 'sequelize';
import databaseConfig from '../../config/database';

export default class BaseService {
  constructor() {
    this.sequelize = new Sequelize(databaseConfig);
  }

  async execute(sql, type) {
    const result = await this.sequelize.query(sql, { type });
    return result;
  }
}
