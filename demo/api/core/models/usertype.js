'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserType = sequelize.define('UserType', {
    name: DataTypes.STRING
  }, {});
  UserType.associate = function(models) {
    // associations can be defined here
  };
  return UserType;
};