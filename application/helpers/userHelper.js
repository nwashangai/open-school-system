import models from '../models';

/**
 * Count the total number of records
 * @function
 * @argument {object} role
 */

exports.generateID = async (role, prefix) => {
  let count = null;
  if (role === 'student') {
    count = await models.students.count({
    });
  } else if (role === 'staff') {
    count = await models.staffs.count({
    });
  } else {
    count = await models.students.count({
    });
  }
  const p = (typeof prefix === 'string') ? prefix : '';
  return (p + (count + 1));
};
