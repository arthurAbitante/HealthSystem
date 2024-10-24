const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const OutPatientClinic = sequelize.define('OutPatientClinic', {
    ClinicID: {
        type: DataTypes.INTEGER,
        references: 'clinic',
        referencesKey: 'ClinicID'
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HospitalID: {
        type: DataTypes.INTEGER,
        references: 'hospital',
        referencesKey: 'HospitalID'
    }
});


module.exports = OutPatientClinic;