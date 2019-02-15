'use strict';
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define('Office', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Office.associate = function(models) {
    // associations can be defined here
  };
  return Office;
};