'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'arms',
      'form_teacher',
      {
        type: Sequelize.STRING(20),
        references: {
          model: 'teachers',
          key: 'teacher_id'
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'arms',
      'form_teacher'
    );
  }
};
