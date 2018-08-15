var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/data/dev-albacore-api.sqlite'
});
var db = {};

db.forecast = sequelize.import(__dirname + '/models/forecast.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
