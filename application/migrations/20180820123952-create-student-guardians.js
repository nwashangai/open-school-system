const uuid = require('uuid');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student_guardians', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      guardian_id: {
        type: Sequelize.UUID,
        references: {
          model: 'guardians',
          key: 'id'
        }
      },
      student_email: {
        type: Sequelize.STRING(50),
        references: {
          model: 'students',
          key: 'email'
        }
      },
      relationship: {
        type: Sequelize.STRING(20)
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
