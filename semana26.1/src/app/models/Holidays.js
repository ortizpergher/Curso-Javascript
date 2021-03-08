import Sequelize, { Model } from 'sequelize';

class Holidays extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'holidays',
      }
    );

    return this;
  }
}

export default Holidays;
