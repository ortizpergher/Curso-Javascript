module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'phone_types',
        schema: 'sequelize',
      },
      [
        {
          name: 'Celular',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Residencial',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Comercial',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fax',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'phone_types',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};
