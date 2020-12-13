const Sequelize = require('sequelize');

let db = new Sequelize('j_lamke_blog', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    storage: './db.sqlite'
});

module.exports = db;
