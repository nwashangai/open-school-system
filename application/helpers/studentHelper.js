import models from '../models';

/**
 * Create student helper transaction
 * @function
 * @argument {object} data
 */
exports.createStudent = async (data) => {
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
