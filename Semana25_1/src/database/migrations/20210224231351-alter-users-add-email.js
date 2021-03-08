module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      'email',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.removeColumn(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      'email'
    );
  },
};
