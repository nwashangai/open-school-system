const uuid = require('uuid');
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('staff_schedules', {
      id: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
      },
      period_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'periods',
          key: 'id'
        }
      },
      teacher_id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'teachers',
          key: 'id'
        }
      },
      day: {
        type: Sequelize.ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
        primaryKey: true,
        allowNull: false
      },
      classroom_id: {
        type: Sequelize.UUID,
        references: {
          model: 'classrooms',
          key: 'id'
        }
      },
      class: {
        type: Sequelize.UUID,
        references: {
          model: 'classes',
          key: 'id'
        }
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
    return queryInterface.dropTable('staff_schedules');
  }
};
