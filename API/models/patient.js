const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
    PatientID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ClinicID: {
        type: DataTypes.INTEGER,
        references: 'outpatientclinic',
        referencesKey: 'ClinicID'
    }
});


module.exports = Patient;