'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('comments', {
      comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      review_id: {
          type: Sequelize.INTEGER,
          references: {
            model: {
                tableName: 'reviews',
            },
            key : 'review_id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
      },
      user_id: {
          type: Sequelize.INTEGER,
          references: {
              model: {
                  tableName: 'users',
              },
              key : 'user_id'
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
    return queryInterface.dropTable('comments')
  }
};
