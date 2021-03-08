import Sequelize, { Model } from 'sequelize';

class Teacher extends Model {
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
        city: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        subject_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'subjects',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'teachers',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, {
      as: 'subject',
      foreignKey: 'subject_id',
    });
    this.belongsToMany(models.SchoolClass, {
      as: 'school_classes',
      foreignKey: 'teacher_id',
      through: 'teachers_school_classes',
    });
  }
}

export default Teacher;
