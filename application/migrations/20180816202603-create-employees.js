'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50),
        references: {
          model: 'users',
          key: 'email'
        }
      },
      employee_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      role: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      middle_name: {
        type: Sequelize.STRING(50)
      },
      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      job_title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      level: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      qualification: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      total_experience: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      marital_status: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      number_of_children: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      father_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      mother_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      spouse_name: {
        type: Sequelize.STRING(100)
      },
      blood_group: {
        type: Sequelize.STRING(3)
      },
      nationality: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      religion: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      address_2: {
        type: Sequelize.STRING(100)
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      phone_2: {
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
    return queryInterface.dropTable('employees_schedules');
  }
};
