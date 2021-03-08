import Sequelize, { Model } from 'sequelize';

class SchoolClass extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        code: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'school_classes',
      }
    );

    return this;
  }
}

export default SchoolClass;
