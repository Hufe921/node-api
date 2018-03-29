'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    remark: DataTypes.STRING,
    cover: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};