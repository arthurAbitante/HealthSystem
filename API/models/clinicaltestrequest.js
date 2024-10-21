const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const ClinicalTestRequest = sequelize.define('ClinicalTestRequest', {
    TestID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    HospitalID: {
        type: DataTypes.INTEGER,
        references: 'hospital',
        referencesKey: 'HospitalID'
    },
    LaboratoryID: {
        type: DataTypes.INTEGER,
        references: 'laboratory',
        referencesKey: 'LaboratoryID'
    },
    TestDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TestResult: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = ClinicalTestRequest;