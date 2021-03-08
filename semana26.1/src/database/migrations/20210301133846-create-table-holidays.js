module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'holidays',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        date: {
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
        schema: 'school',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'holidays',
      schema: 'school',
    });
  },
};
