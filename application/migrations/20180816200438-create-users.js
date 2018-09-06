'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: 'F',
        allowNull: false,
      },
      avatar: {
        type: Sequelize.JSONB
      },
      socket_login: {
        type: Sequelize.JSONB
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
