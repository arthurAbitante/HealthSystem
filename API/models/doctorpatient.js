const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const DoctorPatient = sequelize.define('DoctorPatient', {
    DoctorID: {
        type: DataTypes.INTEGER,
        references: 'doctor',
        referencesKey: 'DoctorID'
    },
    PatientID: {
        type: DataTypes.INTEGER,
        references: 'patient',
        referencesKey: 'PatientID'
    },
    ConsultationDate: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = DoctorPatient;