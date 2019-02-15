'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hire = sequelize.define('Hire', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    lookFor: DataTypes.STRING,
    experience: DataTypes.STRING,
    note: DataTypes.STRING,
    createAt: DataTypes.DATE
  }, {});
  Hire.associate = function(models) {
    // associations can be defined here
  };
  return Hire;
};