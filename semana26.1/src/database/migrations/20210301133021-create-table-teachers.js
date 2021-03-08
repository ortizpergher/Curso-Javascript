module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'teachers',
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
        age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        city: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        subject_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'subjects',
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
      tableName: 'teachers',
      schema: 'school',
    });
  },
};
