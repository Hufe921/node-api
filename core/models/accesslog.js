'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessLog = sequelize.define('AccessLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    token: DataTypes.STRING,
    api: DataTypes.STRING,
    ip: DataTypes.STRING,
    query: DataTypes.STRING,
    request: DataTypes.TEXT,
    isActive: DataTypes.BOOLEAN
  }, {});
  AccessLog.associate = function(models) {
    // associations can be defined here
  };
  return AccessLog;
};