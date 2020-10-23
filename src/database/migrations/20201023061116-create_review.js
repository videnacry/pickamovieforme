'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('review', {
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reviews_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      update_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      delete_date: {
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('review')
  }
};
