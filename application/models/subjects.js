'use strict';
module.exports = (sequelize, DataTypes) => {
  const subjects = sequelize.define('subjects', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    category_id: DataTypes.UUID,
    subject_name: DataTypes.STRING(50)
  }, {});
  subjects.associate = (models) => {
    subjects.belongsTo(models.subject_categories);
  };
  return subjects;
};
