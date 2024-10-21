const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
    DoctorID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Specialty: {
        type: DataTypes.STRING,
        allowNull: true
    },
    HospitalID: {
        type: DataTypes.INTEGER,
        references: 'hospital',
        referencesKey: 'HospitalID'
    }
});


module.exports = Doctor;