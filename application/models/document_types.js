'use strict';
module.exports = (sequelize, DataTypes) => {
  const document_types = sequelize.define('document_types', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    type_name: DataTypes.STRING(20)
  }, {});
  document_types.associate = (models) => {
    // associations can be defined here
  };
  return document_types;
};
