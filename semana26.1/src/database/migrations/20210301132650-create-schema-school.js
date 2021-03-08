module.exports = {
  up: async queryInterface => {
    queryInterface.createSchema('school');
  },

  down: async queryInterface => {
    queryInterface.dropSchema('school');
  },
};
