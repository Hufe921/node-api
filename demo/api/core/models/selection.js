'use strict';
module.exports = (sequelize, DataTypes) => {
  var Selection = sequelize.define('Selection', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  Selection.associate = function(models) {
    // associations can be defined here
  };
  return Selection;
};