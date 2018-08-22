'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject_teachers = sequelize.define('subject_teachers', {
    teacher_id: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    subject_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    description: DataTypes.TEXT
  }, {});
  subject_teachers.associate = (models) => {
    subject_teachers.belongsTo(models.teachers);
    subject_teachers.belongsTo(models.subjects, {
      as: 'subject_teacher',
      foreignKey: 'fk_subject_teacher'
    });
  };
  return subject_teachers;
};
