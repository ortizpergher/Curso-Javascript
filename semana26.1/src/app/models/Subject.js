import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'subjects',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.StudentGrade, {
      as: 'student_grades',
      foreignKey: 'subject_id',
    });
    this.hasMany(models.Teacher, {
      as: 'teachers',
      foreignKey: 'subject_id',
    });
  }
}

export default Subject;
