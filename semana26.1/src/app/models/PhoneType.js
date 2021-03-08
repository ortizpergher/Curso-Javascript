import Sequelize, { Model } from 'sequelize';

class PhoneType extends Model {
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
        tableName: 'phone_types',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.StudentPhone, {
      as: 'students_phones',
      foreignKey: 'type_id',
    });
  }
}

export default PhoneType;
