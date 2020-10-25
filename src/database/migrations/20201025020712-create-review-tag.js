'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('review_tag', {
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'reviews',
          },
          key: 'review_id',
        },
        // onDelete: 'cascade',
        // onUpdate: 'cascade'
        indexes: [{
          unique: true,
          fields: ['review_id', 'tag_id']
        }],
      },
      tag_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'tags',
          },
          key: 'tag_id',
        },
        // onDelete: 'cascade',
        // onUpdate: 'cascade'
        indexes: [{
          unique: true,
          fields: ['review_id', 'tag_id']
        }],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('review_tag');
  }
};