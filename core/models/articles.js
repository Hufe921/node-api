'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    city: DataTypes.STRING,
    remark: DataTypes.TEXT('long')
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};