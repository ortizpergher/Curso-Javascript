module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'orders',
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
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        amount: {
          type: Sequelize.DataTypes.DECIMAL(10, 2),
          allowNull: true,
          // defaultValue: 0.00
          // unique: true
        },
      },
      {
        schema: 'sequelize',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'orders',
      schema: 'sequelize',
    });
  },
};
