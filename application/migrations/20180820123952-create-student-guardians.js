const uuid = require('uuid');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student_guardians', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      guardian_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'guardians',
          key: 'id'
        }
      },
      student_email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'students',
          key: 'email'
        }
      },
      relationship: {
        type: Sequelize.STRING(20),
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
    return queryInterface.dropTable('student_guardians');
  }
};
