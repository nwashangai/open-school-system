const uuid = require('uuid');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('guardians', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      email: {
        type: Sequelize.STRING(50),
        references: {
          model: 'users',
          key: 'email'
        }
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      dob: {
        type: Sequelize.DATE
      },
      occupation: {
        type: Sequelize.STRING(100)
      },
      income: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      office_phone: {
        type: Sequelize.STRING(15)
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false
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
    return queryInterface.dropTable('guardians');
  }
};
