// sequelize : usar bancos relacionais com node
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});

module.exports = sequelize;


// script da tabela do banco app.db
/*
 *create table `jobs` ( 
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `title` TEXT, 
    `salary` TEXT, 
    `company` TEXT, 
    `email` TEXT, 
    `new` INTEGER, 
    `createdAt` TEXT, 
    `updatedAt` TEXT
  );
 */
