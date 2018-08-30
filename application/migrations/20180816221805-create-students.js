'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      email: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50),
        references: {
          model: 'users',
          key: 'email'
        }
      },
      student_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      middle_name: {
        type: Sequelize.STRING(50),
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
        type: Sequelize.DATE,
        allowNull: false
      },
      blood_group: {
        type: Sequelize.STRING(3)
      },
      nationality: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      language: {
        type: Sequelize.STRING(20)
      },
      religion: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      student_category: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      student_type: {
        type: Sequelize.STRING(10),
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
    return queryInterface.dropTable('students');
  }
};