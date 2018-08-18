'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    password: DataTypes.TEXT,
    role: DataTypes.STRING(20),
    active: DataTypes.BOOLEAN
  }, {});
  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
