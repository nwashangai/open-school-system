'use strict';
module.exports = (sequelize, DataTypes) => {
  const guardians = sequelize.define('guardians', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: DataTypes.STRING(50),
    last_name: DataTypes.STRING(50),
    first_name: DataTypes.STRING(50),
    gender: DataTypes.STRING(7),
    dob: DataTypes.DATE,
    occupation: DataTypes.STRING(100),
    income: DataTypes.STRING(50),
    address: DataTypes.STRING(100),
    phone: DataTypes.STRING(15),
    office_phone: DataTypes.STRING(15),
    city: DataTypes.STRING(20),
    state: DataTypes.STRING(20),
    country: DataTypes.STRING(50)
  }, {});
  guardians.associate = (models) => {
    guardians.belongsTo(models.users, {
      as: 'guardian',
      foreignKey: 'fk_guardian'
    });
  };
  return guardians;
};
