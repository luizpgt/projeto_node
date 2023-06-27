// sequelize : usar bancos relacionais com node
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});

module.exports = sequelize;
