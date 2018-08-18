'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject_categories = sequelize.define('subject_categories', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    category_name: DataTypes.STRING(50)
  }, {});
  subject_categories.associate = (models) => {
    // associations can be defined here
  };
  return subject_categories;
};
