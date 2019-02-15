'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    cv: DataTypes.STRING,
    message: DataTypes.TEXT,
    confirm: DataTypes.BOOLEAN,
    createAt: DataTypes.DATE
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
  };
  return Candidate;
};