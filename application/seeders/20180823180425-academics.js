'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departments', [{
      department_name: 'Science',
      createdAt: new Date('2013-11-02 00:00:00Z'),
      updatedAt: new Date('2013-11-02 00:00:00Z')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departments', null, {});
  }
};
