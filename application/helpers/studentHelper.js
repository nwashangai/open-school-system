import models from '../models';
const userHelper = require('../helpers/userHelper');

/**
 * Create student helper transaction
 * @function
 * @argument {object} data
 */
exports.createStudent = async (data) => {
  await userHelper.generateID('student', 'STUD').then((count) => {
    data.student_id = count;
  }).catch((error) => {
    throw error;
  });
  return models.sequelize.transaction(async (t) => {
    return models.users.create({
      email: data.email,
      role: 'student'
    }, { transaction: t }).then((user) => {
      return models.students.create(data, { transaction: t });
    }).then((student) => { return student; }).catch((err) => {
      throw err;
    })
  });
};
