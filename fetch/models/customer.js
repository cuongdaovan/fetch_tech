'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};