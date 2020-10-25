'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_review_favorites', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'users',
          },
          key : 'user_id',
        },
        // onDelete: 'cascade',
        // onUpdate: 'cascade'
        indexes: [{
          unique: true,
          fields: ['user_id', 'review_id']
        }],
      },
      review_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'reviews',
          },
          key : 'review_id',
        },
        // onDelete: 'cascade',
        // onUpdate: 'cascade'
        indexes: [{
          unique: true,
          fields: ['user_id', 'review_id']
        }],
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_review_favorites');
  }
};