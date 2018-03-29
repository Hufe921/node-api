'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    userTypeId: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};