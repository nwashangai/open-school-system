'use strict';
module.exports = (sequelize, DataTypes) => {
  const terms = sequelize.define('terms', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    session_id: DataTypes.UUID,
    term: DataTypes.ENUM('first', 'second', 'third')
  }, {});
  terms.associate = (models) => {
    terms.belongsTo(models.sessions);
  };
  return terms;
};
