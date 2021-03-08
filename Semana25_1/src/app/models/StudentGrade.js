import Sequelize, { Model } from 'sequelize';

class StudentPhone extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        number: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'student_phones',
      }
    );

    return this;
  }
}

export default StudentPhone;
