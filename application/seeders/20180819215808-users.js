'use strict';
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync('12345', 10);
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('users', [{
      email: 'johndoe@gmail.com',
      password: hash,
      role: 'admin',
      active: 'T',
      createdAt: new Date('2013-11-02 00:00:00Z'),
      updatedAt: new Date('2013-11-02 00:00:00Z')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
