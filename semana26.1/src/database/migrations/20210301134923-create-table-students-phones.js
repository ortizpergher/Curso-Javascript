module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'students_phones',
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
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        schema: 'school',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'students_phones',
      schema: 'school',
    });
  },
};
