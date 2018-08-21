'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_guardians = sequelize.define('student_guardians', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    guardian_id: DataTypes.UUID,
    student_email: DataTypes.STRING(50),
    relationship: DataTypes.STRING(20)
  }, {});
  student_guardians.associate = (models) => {
    student_guardians.belongsTo(models.guardians, {
      as: 'student_guardian',
      foreignKey: 'fk_student_guardian'
    });
    student_guardians.belongsTo(models.students, {
      as: 'guardian_student',
      foreignKey: 'fk_guardian_student'
    });
  };
  return student_guardians;
};
