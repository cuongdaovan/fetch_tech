'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    locationId: DataTypes.INTEGER,
    enable: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    type: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    picture: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};