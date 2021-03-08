module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'student_phones',
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
        student_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'students',
            key: 'id',
          },
        },
        phone_type_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
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
        schema: 'sequelize',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'student_phones',
      schema: 'sequelize',
    });
  },
};
