module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'student_grades',
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
        grade: {
          type: Sequelize.DataTypes.DECIMAL(3, 2),
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
        schema: 'sequelize',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'student_grades',
      schema: 'sequelize',
    });
  },
};
