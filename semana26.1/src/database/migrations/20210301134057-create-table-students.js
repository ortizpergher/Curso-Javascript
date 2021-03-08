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
          defaultValue: true,
        },
        school_class_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'school_classes',
            key: 'id',
          },
        },
        pwd: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        birthdate: {
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
      tableName: 'students',
      schema: 'school',
    });
  },
};
