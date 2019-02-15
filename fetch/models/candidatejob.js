'use strict';
module.exports = (sequelize, DataTypes) => {
  const CandidateJob= sequelize.define('CandidateJob', {
    candidateId: DataTypes.INTEGER,
    jobId: DataTypes.INTEGER
  }, {});
  CandidateJob.associate = function(models) {
    // associations can be defined here
  };
  return CandidateJob;
};