import Sequelize, { Model } from 'sequelize';

class StudentGrade extends Model {
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
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'student_grades',
      }
    );

    return this;
  }
}

export default StudentGrade;
