module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'school_class_teachers',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        school_class_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'school_classes',
            key: 'id',
          },
        },
        teacher_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'teachers',
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
      tableName: 'school_class_teachers',
      schema: 'sequelize',
    });
  },
};
