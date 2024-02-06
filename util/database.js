const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root', process.env.SQLpassword, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;