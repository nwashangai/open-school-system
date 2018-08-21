'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_arm = sequelize.define('student_arm', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    student_id: DataTypes.STRING(20),
    arm_id: DataTypes.UUID
  }, {});
  student_arm.associate = (models) => {
    student_arm.belongsTo(models.arms);
    student_arm.belongsTo(models.students, {
      as: 'reg_student',
      foreignKey: 'fk_reg_student'
    });
  };
  return student_arm;
};
