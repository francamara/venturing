'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },
      {
        freezeTableName: true,
        timestamps: false,
      });
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Users', null, {})

  }
};