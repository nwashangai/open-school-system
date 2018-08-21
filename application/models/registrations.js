'use strict';
module.exports = (sequelize, DataTypes) => {
  const registrations = sequelize.define('registrations', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    student_id: DataTypes.STRING(20),
    term_id: DataTypes.UUID,
    arm_id: DataTypes.UUID,
    amount: DataTypes.DECIMAL(10, 2),
    status: DataTypes.ENUM('registered', 'completed', 'ineligible'),
    discount: DataTypes.INTEGER
  }, {});
  registrations.associate = (models) => {
    registrations.belongsTo(models.students, {
      as: 'reg_student',
      foreignKey: 'fk_reg_student'
    });
    registrations.belongsTo(models.terms, {
      as: 'reg_term',
      foreignKey: 'fk_reg_term'
    });
    registrations.belongsTo(models.classes);
  };
  return registrations;
};
