'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_tag_hiddens', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'user_id',
        },
        // onDelete: 'cascade',
        // onUpdate: 'cascade'
        indexes: [{
          unique: true,
          fields: ['user_id', 'tag_id']
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
          fields: ['user_id', 'tag_id']
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
    await queryInterface.dropTable('user_tag_hiddens');
  }
};