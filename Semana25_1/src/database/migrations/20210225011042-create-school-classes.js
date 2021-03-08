module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'school_classes',
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
        start_date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        end_date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
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
      tableName: 'school_classes',
      schema: 'sequelize',
    });
  },
};
