'use strict';
module.exports = (sequelize, DataTypes) => {
  const classes = sequelize.define('classes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    class_name: DataTypes.STRING(30)
  }, {});
  classes.associate = (models) => {
    // associations can be defined here
  };
  return classes;
};