'use strict';
module.exports = (sequelize, DataTypes) => {
  const classes = sequelize.define('classes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    class_name: DataTypes.STRING(30)
  }, {});
  classes.associate = (models) => {
    // associations can be defined here
  };
  return classes;
};