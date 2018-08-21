'use strict';
module.exports = (sequelize, DataTypes) => {
  const arms = sequelize.define('arms', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    class_id: DataTypes.UUID,
    arm: DataTypes.STRING(10),
    form_teacher: DataTypes.STRING(20)
  }, {});
  arms.associate = (models) => {
    arms.belongsTo(models.classes);
    arms.hasOne(models.teachers);
  };
  return arms;
};
