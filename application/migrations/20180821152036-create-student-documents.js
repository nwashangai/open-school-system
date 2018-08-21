'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student_documents', {
      student_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(20),
        references: {
          model: 'students',
          key: 'student_id'
        }
      },
      type_id: {
        type: Sequelize.UUID,
        references: {
          model: 'document_types',
          key: 'id'
        }
      },
      file: {
        type: Sequelize.STRING(20)
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
    return queryInterface.dropTable('student_documents');
  }
};