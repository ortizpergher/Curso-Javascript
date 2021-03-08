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
        started_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        finished_at: {
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
      tableName: 'school_classes',
      schema: 'school',
    });
  },
};
