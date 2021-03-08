module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'teachers_school_classes',
      {
        teacher_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'teachers',
            key: 'id',
          },
        },
        school_class_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
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
        schema: 'school',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'teachers_school_classes',
      schema: 'school',
    });
  },
};
