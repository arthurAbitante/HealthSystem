const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Laboratory = sequelize.define('Laboratory', {
    LaboratoryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Laboratory;