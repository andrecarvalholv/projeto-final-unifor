const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // Banco de dados armazenado no arquivo local
});

module.exports = sequelize;