const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Hospital = sequelize.define('Hospital', {
    HospitalID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.String
    }
});


module.exports = Hospital;