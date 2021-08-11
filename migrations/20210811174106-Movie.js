'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        required: true,
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
        required: true,
      },
      year: {
        type: Sequelize.INTEGER,
        required: true,
      },
    },
      {
        freezeTableName: true,
        timestamps: true,
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('Movies', null, {});
  }
};
