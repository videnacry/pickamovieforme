'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('users', {
      user_id: {
        type:           Sequelize.INTEGER,
        primaryKey:     true,
        autoIncrement:  true,
        allowNull:      false
      },
      name: {
        type:         Sequelize.STRING(50),
        allowNull:    false
      },
      username: {
        type:         Sequelize.STRING(20),
        allowNull:    false,
        unique:       true
      },
      email: {
        type:         Sequelize.STRING(70),
        allowNull:    false,
        unique:       true
      },
      password: {
        type:         Sequelize.STRING,
        allowNull:    false
      },
      photo: {
        type:         Sequelize.STRING,
        allowNull:    true,
        defaultValue: "src/assets/profileImage/profile-picture.jpg"
      },
      description: {
        type:         Sequelize.TEXT,
        allowNull:    true
      },
      creation_date: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false
      },
      updated_date: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false
      },
      deleted_date: {
        type:         Sequelize.DATE,
        allowNull:    true
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
    return queryInterface.dropTable('users')
  }
};