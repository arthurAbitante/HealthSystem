const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const SupportStaff = sequelize.define('SupportStaff', {
    StaffID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ClinicID: {
        type: DataTypes.INTEGER,
        references: 'outpatientclinic',
        referencesKey: 'ClinicID'
    }
});


module.exports = SupportStaff;