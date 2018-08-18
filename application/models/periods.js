'use strict';
module.exports = (sequelize, DataTypes) => {
  const periods = sequelize.define('periods', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {});
  periods.associate = (models) => {
    // associations can be defined here
  };
  return periods;
};
