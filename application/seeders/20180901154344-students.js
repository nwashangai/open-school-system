'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'student1@host.com',
      role: 'student',
      active: 'F',
      createdAt: new Date('2013-11-02 00:00:00Z'),
      updatedAt: new Date('2013-11-02 00:00:00Z')
    }, {
      email: 'vicmos@gmail.com',
      role: 'student',
      active: 'F',
      createdAt: new Date('2013-11-02 00:00:00Z'),
      updatedAt: new Date('2013-11-02 00:00:00Z')
    }, {
      email: 'miriam@host.com',
      role: 'student',
      active: 'F',
      createdAt: new Date('2013-11-02 00:00:00Z'),
      updatedAt: new Date('2013-11-02 00:00:00Z')
    }], {}).then((user) => {
      return queryInterface.bulkInsert('students', [{
        email: 'student1@host.com',
        student_id: 'STUD1',
        last_name: 'Ikechukwu',
        first_name: 'Mba',
        gender: 'male',
        dob: '2001-04-07',
        blood_group: 'A',
        nationality: 'Nigerian',
        language: 'english',
        religion: 'Christain',
        student_category: 'New',
        student_type: 'Day',
        address: '1 new street',
        phone: '0123456789',
        city: 'FCT',
        state: 'Abuja',
        country: 'Nigeria',
        createdAt: new Date('2013-11-02 00:00:00Z'),
        updatedAt: new Date('2013-11-02 00:00:00Z')
      }, {
        email: 'vicmos@gmail.com',
        student_id: 'STUD2',
        last_name: 'Victor',
        first_name: 'Moses',
        gender: 'male',
        dob: '2003-08-13',
        blood_group: 'AB',
        nationality: 'Nigerian',
        language: 'english',
        religion: 'Christain',
        student_category: 'New',
        student_type: 'Day',
        address: '1 new street',
        phone: '0902537816',
        city: 'Ikeja',
        state: 'Lagos',
        country: 'Nigeria',
        createdAt: new Date('2013-11-02 00:00:00Z'),
        updatedAt: new Date('2013-11-02 00:00:00Z')
      }, {
        email: 'miriam@host.com',
        student_id: 'STUD3',
        last_name: 'Miriam',
        first_name: 'Anthony',
        gender: 'female',
        dob: '2002-07-02',
        blood_group: 'A',
        nationality: 'Nigerian',
        language: 'english',
        religion: 'Christain',
        student_category: 'New',
        student_type: 'Day',
        address: '1 new street',
        phone: '07037825136',
        city: 'Makurdi',
        state: 'Benue',
        country: 'Nigeria',
        createdAt: new Date('2013-11-02 00:00:00Z'),
        updatedAt: new Date('2013-11-02 00:00:00Z')
      }], {});
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
