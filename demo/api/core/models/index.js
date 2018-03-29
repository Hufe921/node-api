'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/..\domain\config.json')[env];
var config = require(path.resolve(__dirname, '../domain/config.json'))[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 数据库表字段修改后迁移
db.syncDB = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await sequelize.sync({
      alter: true
    });
  } else {
    throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
  }
}

module.exports = db;