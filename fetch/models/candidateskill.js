'use strict';
module.exports = (sequelize, DataTypes) => {
  const CandidateSkill = sequelize.define('CandidateSkill', {
    skillId: DataTypes.INTEGER,
    candidateId: DataTypes.INTEGER,
    isRequired: DataTypes.BOOLEAN
  }, {});
  CandidateSkill.associate = function(models) {
    // associations can be defined here
  };
  return CandidateSkill;
};