'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_documents = sequelize.define('student_documents', {
    student_id: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    type_id: DataTypes.UUID,
    file: DataTypes.STRING(20),
    description: DataTypes.TEXT
  }, {});
  student_documents.associate = (models) => {
    student_documents.belongsTo(models.students);
    student_documents.hasOne(models.document_types, {
      as: 'document',
      foreignKey: 'fk_student_document'
    });
  };
  return student_documents;
};
