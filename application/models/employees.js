'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    email: {
      type: DataTypes.STRING(50),
      primaryKey: true
    },
    employee_id: DataTypes.STRING(20),
    role: DataTypes.STRING(10),
    last_name: DataTypes.STRING(50),
    middle_name: DataTypes.STRING(50),
    first_name: DataTypes.STRING(50),
    dob: DataTypes.DATE,
    gender: DataTypes.STRING(7),
    job_title: DataTypes.STRING(100),
    level: DataTypes.STRING(30),
    qualification: DataTypes.STRING(50),
    total_experience: DataTypes.STRING(15),
    marital_status: DataTypes.STRING(10),
    number_of_children: DataTypes.INTEGER,
    father_name: DataTypes.STRING(100),
    mother_name: DataTypes.STRING(100),
    spouse_name: DataTypes.STRING(100),
    blood_group: DataTypes.STRING(3),
    nationality: DataTypes.STRING(50),
    religion: DataTypes.STRING(20),
    address_1: DataTypes.STRING(100),
    address_2: DataTypes.STRING(100),
    phone: DataTypes.STRING(15),
    phone_2: DataTypes.STRING(15),
    city: DataTypes.STRING(20),
    state: DataTypes.STRING(20),
    country: DataTypes.STRING(50)
  }, {});
  employees.associate = (models) => {
    employees.belongsTo(models.users, { foreignKey: 'fk_email' });
  };
  return employees;
};
