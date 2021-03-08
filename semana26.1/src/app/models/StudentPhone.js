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
        type_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'phone_types',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'students_phones',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.PhoneType, {
      as: 'type',
      foreignKey: 'type_id',
    });
    this.belongsTo(models.Student, {
      as: 'student',
      foreignKey: 'student_id',
    });
  }
}

export default StudentPhone;
