'use strict';
module.exports = (sequelize, DataTypes) => {
  const arms = sequelize.define('arms', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    class_id: DataTypes.UUID,
    arm: DataTypes.STRING(10)
  }, {});
  arms.associate = (models) => {
    arms.belongsTo(models.classes);
  };
  return arms;
};
