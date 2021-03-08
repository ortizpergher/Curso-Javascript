module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'students',
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
        status: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
        },
        disabled: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        birth_date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        school_class_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'school_classes',
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
      tableName: 'students',
      schema: 'sequelize',
    });
  },
};
