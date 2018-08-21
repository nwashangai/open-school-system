'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'class_time_tables',
      'schedule',
      {
        type: Sequelize.UUID,
        references: {
          model: 'staff_schedules',
          key: 'id'
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'class_time_tables',
      'schedule'
    );
  }
};
