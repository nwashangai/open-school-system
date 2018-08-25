import models from '../models';
const userHelper = require('../helpers/userHelper');

/**
 * Create staff helper transaction
 * @function
 * @argument {object} data
 */
exports.createStaff = async (data) => {
  await userHelper.generateID('staff', 'STF').then((count) => {
    data.employee_id = count;
  }).catch((error) => {
    throw new Error(error.message);
  });
  return models.sequelize.transaction(async (t) => {
    return models.users.create({
      email: data.email,
      role: 'staff'
    }, { transaction: t }).then((user) => {
      return models.employees.create(data, { transaction: t });
    }).then((employee) => {
      const staffFields = { id: data.employee_id };
      return models.staffs.create(staffFields, { transaction: t });
    }).then((staff) => {
      return staff;
    })
      .catch((err) => {
        throw new Error(err.message);
      })
  }).catch((err) => {
    throw new Error(err.message);
  });
};
