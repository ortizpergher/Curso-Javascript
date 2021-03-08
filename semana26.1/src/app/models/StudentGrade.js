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
        grade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        student_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'students',
            key: 'id',
          },
        },
        subject_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'subjects',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'students_grades',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, {
      as: 'subject',
      foreignKey: 'subject_id',
    });
    this.belongsTo(models.Student, {
      as: 'student',
      foreignKey: 'student_id',
    });
  }
}

export default StudentGrade;
