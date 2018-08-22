'use strict';
module.exports = (sequelize, DataTypes) => {
  const staffs = sequelize.define('staffs', {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true
    }
  }, {});
  staffs.associate = (models) => {
    staffs.belongsTo(models.employees, {
      as: 'staff_employee',
      foreignKey: 'fk_staff_employee'
    });
  };
  return staffs;
};
