const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Exam = sequelize.define('Exam', {
    ExamID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ExamName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PatientID: {
        type: DataTypes.INTEGER,
        references: 'patient',
        referencesKey: 'PatientID'
    },
    ExamDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Result: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Exam;