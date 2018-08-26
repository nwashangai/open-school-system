'use strict';
module.exports = (sequelize, DataTypes) => {
  const teachers = sequelize.define('teachers', {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    department_id: DataTypes.UUID,
  }, {});
  teachers.associate = (models) => {
    teachers.belongsTo(models.employees, {
      as: 'teacher_user',
      foreignKey: 'fk_teacher_user'
    });
    teachers.belongsTo(models.departments, {
      as: 'teacher_department',
      foreignKey: 'fk_teacher_department'
    });
  };
  return teachers;
};
