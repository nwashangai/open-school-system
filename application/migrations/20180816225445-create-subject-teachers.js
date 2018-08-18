'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subject_teachers', {
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50),
        references: {
          model: 'teachers',
          key: 'email'
        }
      },
      subject_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'subjects',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('subject_teachers');
  }
};
