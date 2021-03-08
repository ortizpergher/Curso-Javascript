module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'students_grades',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        grade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        student_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'students',
            key: 'id',
          },
        },
        subject_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
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
      tableName: 'students_grades',
      schema: 'school',
    });
  },
};
