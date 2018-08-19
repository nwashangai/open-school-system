import models from '../models';

/**
 * Create user helper transaction
 * @function
 * @argument {object} data
 */
exports.createStudent = async (data) => {
  try {
    return await models.sequelize.transaction(async () => {
      return models.users.create({
        email: data.email,
        role: 'student'
      }).then(() => {
        return models.students.create(data).then((student) => {
          return student;
        }).catch((err) => {
          throw err;
        })
      }).catch((err) => {
        throw err;
      })
    });
  } catch (error) {
    throw error;
  }
};
