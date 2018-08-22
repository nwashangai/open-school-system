'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subject_teachers', {
      teacher_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(20),
        references: {
          model: 'teachers',
          key: 'id'
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
