'use strict';
module.exports = (sequelize, DataTypes) => {
  const sessions = sequelize.define('sessions', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    session: DataTypes.STRING(50),
    active: DataTypes.BOOLEAN
  }, {});
  sessions.associate = (models) => {
    // associations can be defined here
  };
  return sessions;
};
