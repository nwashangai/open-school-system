import models from '../models';
const userHelper = require('../helpers/userHelper');

/**
 * Create teacher helper transaction
 * @function
 * @argument {object} data
 */
exports.createTeacher = async (data) => {
  await userHelper.generateID('teacher', 'TCH').then((count) => {
    data.employee_id = count;
  }).catch((error) => {
    throw error;
  });
  return models.sequelize.transaction(async (t) => {
    return models.users.create({
      email: data.email,
      role: 'teacher'
    }, { transaction: t }).then((user) => {
      return models.employees.create(data, { transaction: t });
    }).then((employee) => {
      const teacherFields = { id: data.employee_id, department: data.department };
      return models.teachers.create(teacherFields, { transaction: t });
    }).then((teacher) => {
      return teacher;
    })
      .catch((err) => {
        throw err;
      })
  }).catch((err) => {
    throw err;
  });
};
