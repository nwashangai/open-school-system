'use strict';
module.exports = (sequelize, DataTypes) => {
  const classrooms = sequelize.define('classrooms', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    classroom_name: DataTypes.STRING(20),
    type: DataTypes.STRING(20)
  }, {});
  classrooms.associate = (models) => {
    // associations can be defined here
  };
  return classrooms;
};
