'use strict';
module.exports = (sequelize, DataTypes) => {
  const departments = sequelize.define('departments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    department_name: DataTypes.STRING(50),
    head_of_department: DataTypes.STRING(50)
  }, {});
  departments.associate = (models) => {
    // associations can be defined here
  };
  return departments;
};
