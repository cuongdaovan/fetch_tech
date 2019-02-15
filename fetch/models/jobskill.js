'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobSkill = sequelize.define('JobSkill', {
    skillId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER,
    isRequired: DataTypes.BOOLEAN
  }, {});
  JobSkill.associate = function(models) {
    // associations can be defined here
  };
  return JobSkill;
};