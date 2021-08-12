'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: 'admin'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }

}

