module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'subjects',
        schema: 'sequelize',
      },
      [
        {
          name: 'HTML',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'CSS',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'JS',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Node',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'React',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'subjects',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};
