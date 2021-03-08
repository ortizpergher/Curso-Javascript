module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'school_classes',
        schema: 'sequelize',
      },
      [
        {
          code: 'N100',
          start_date: '2021-03-01',
          end_date: '2021-11-30',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'school_classes',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};
