import models from '../models';

/**
 * Create guardian helper transaction
 * @function
 * @argument {object} data
 */
exports.createGuardian = async (data) => {
  return models.sequelize.transaction(async (t) => {
    return models.users.create({
      email: data.email,
      role: 'guardian'
    }, { transaction: t }).then((user) => {
      return models.guardians.create(data, { transaction: t });
    }).then((guardian) => {
      const guardianFields = {
        guardian_id: guardian.id,
        student_email: data.ward_id,
        relationship: data.relationship
      };
      return models.student_guardians.create(guardianFields, { transaction: t });
    }).then((studentGuardian) => {
      return studentGuardian;
    })
      .catch((err) => {
        throw err;
      })
  }).catch((err) => {
    throw err;
  });
};
