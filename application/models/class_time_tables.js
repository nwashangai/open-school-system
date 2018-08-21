'use strict';
module.exports = (sequelize, DataTypes) => {
  const class_time_tables = sequelize.define('class_time_tables', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    session_id: DataTypes.UUID,
    class_arm_id: DataTypes.UUID
  }, {});
  class_time_tables.associate = (models) => {
    class_time_tables.belongsTo(models.sessions);
    class_time_tables.belongsTo(models.arms);
  };
  return class_time_tables;
};
