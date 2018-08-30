'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    email: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    student_id: DataTypes.STRING(20),
    last_name: DataTypes.STRING(50),
    middle_name: DataTypes.STRING(50),
    first_name: DataTypes.STRING(50),
    gender: DataTypes.STRING(7),
    dob: DataTypes.DATE,
    blood_group: DataTypes.STRING(3),
    nationality: DataTypes.STRING(50),
    language: DataTypes.STRING(20),
    religion: DataTypes.STRING(20),
    student_category: DataTypes.STRING(10),
    student_type: DataTypes.STRING(10),
    address: DataTypes.STRING(100),
    address_2: DataTypes.STRING(100),
    phone: DataTypes.STRING(15),
    phone_2: DataTypes.STRING(15),
    city: DataTypes.STRING(20),
    state: DataTypes.STRING(20),
    country: DataTypes.STRING(50)
  }, {});
  students.associate = (models) => {
    students.belongsTo(models.users, { foreignKey: 'email' });
  };
  return students;
};
