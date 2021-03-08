import Sequelize, { Model } from 'sequelize';

class Student extends Model {
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
        age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        school_class_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'school_classes',
            key: 'id',
          },
        },
        pwd: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        birthdate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'students',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.SchoolClass, {
      as: 'school_class',
      foreignKey: 'school_class_id',
    });
    this.hasMany(models.StudentGrade, {
      as: 'students_grades',
      foreignKey: 'student_id',
    });
    this.hasMany(models.StudentPhone, {
      as: 'students_phones',
      foreignKey: 'student_id',
    });
  }
}

export default Student;
