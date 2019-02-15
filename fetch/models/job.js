'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    enable: DataTypes.BOOLEAN,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
    type: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    picture: DataTypes.STRING,
    createAt: DataTypes.DATE,
    order: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};