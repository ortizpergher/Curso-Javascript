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
        started_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        finished_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'school_classes',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Student, {
      as: 'students',
      foreignKey: 'school_class_id',
    });
    this.belongsToMany(models.Teacher, {
      as: 'teachers',
      foreignKey: 'school_class_id',
      through: 'teachers_school_classes',
    });
  }
}

export default SchoolClass;
