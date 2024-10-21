const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('hospital_db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

MediaSourceHandle.exports = sequelize;