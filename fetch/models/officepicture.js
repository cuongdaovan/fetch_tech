'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfficePicture = sequelize.define('OfficePicture', {
    title: DataTypes.STRING,
    officeId: DataTypes.INTEGER,
    desciption: DataTypes.TEXT,
    picture: DataTypes.STRING
  }, {});
  OfficePicture.associate = function(models) {
    // associations can be defined here
  };
  return OfficePicture;
};