'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('reviews', {
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
        allowNull: false,
        unique: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      reviews_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'users',
            },
            key : 'user_id',
        }
    },
      creation_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
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
    return queryInterface.dropTable('reviews')
  }
};
