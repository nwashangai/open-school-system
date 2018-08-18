'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject_teachers = sequelize.define('subject_teachers', {
    email: {
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
    subject_teachers.belongsTo(models.subjects);
  };
  return subject_teachers;
};
