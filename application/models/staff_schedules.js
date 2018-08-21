'use strict';
module.exports = (sequelize, DataTypes) => {
  const staff_schedules = sequelize.define('staff_schedules', {
    period_id: DataTypes.UUID,
    teacher_id: DataTypes.STRING(20),
    day: DataTypes.ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'),
    classroom_id: DataTypes.UUID,
    class: DataTypes.UUID
  }, {});
  staff_schedules.associate = (models) => {
    staff_schedules.hasOne(models.periods);
    staff_schedules.hasOne(models.teachers, {
      as: 'schedule',
      foreignKey: 'fk_schedule'
    });
    staff_schedules.hasOne(models.teachers, {
      as: 'classrooms',
      foreignKey: 'fk_schedule_classroom'
    });
    staff_schedules.hasOne(models.teachers, {
      as: 'classes',
      foreignKey: 'fk_schedule_class'
    });
  };
  return staff_schedules;
};
