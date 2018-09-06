import moment from 'moment';
import models from '../models';
import encrypt from './crypto';

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
    count = await models.teachers.count({
    });
  }
  const p = (typeof prefix === 'string') ? prefix : '';
  return (p + (count + 1));
};

exports.updatePassword = (email, password) => {
  /* return models.users.findOne({ where: { email } })
    .on('success', (user) => {
      if (user) {
        return user.update({ password }).success(() => user);
      }
      throw Error('no user found');
    }); */
  return models.users.update({ password }, { where: { email }, individualHooks: true }).then(result => result)
    .catch((error) => { throw error; });
  /* return models.users.update({ password }, { where: { email } }).then(result => result)
    .catch((error) => { throw error; }); */
};

exports.timeCheck = (timeHash) => {
  const time = new Date(encrypt.decrypt(timeHash.toString()));
  const a = moment(time, 'DD/MM/YYYY');
  const b = moment(new Date(), 'DD/MM/YYYY');
  return b.diff(a, 'days');
};

exports.updateAvatar = (data, email) => {
  return models.users.update({ avatar: data }, { where: { email } }).then(result => result)
    .catch((error) => { throw error; });
};
