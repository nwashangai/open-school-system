'use strict';
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    password: DataTypes.TEXT,
    role: DataTypes.STRING(20),
    avatar: DataTypes.JSONB,
    socket_login: DataTypes.JSONB,
    active: DataTypes.BOOLEAN
  }, {});
  users.beforeUpdate((user, options) => {
    user.dataValues.password = bcrypt.hashSync(user.dataValues.password, 10);
  });
  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
