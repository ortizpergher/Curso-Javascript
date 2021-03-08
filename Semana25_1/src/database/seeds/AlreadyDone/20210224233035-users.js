module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      [
        {
          name: 'Fulano',
          email: 'fulano@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fulano 1',
          email: 'fulano1@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fulano 2',
          email: 'fulano2@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};
