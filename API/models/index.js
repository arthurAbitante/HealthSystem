const Hospital = require('./hospital');
const Clinic = require('./clinic');
const Doctor = require('./doctor');
const Patient = require('./patient');
const Laboratory = require('./lab');
const SupportStaff = require('.supportStaff');

Hospital.hasMany(Clinic, {foreignKey: 'HospitalID'});
Clinic.belongsTo(Hospital, {foreignKey: 'HospitalID'});

Hospital.hasMany(Doctor, {foreignKey: 'HospitalID'});
Doctor.belongsTo(Hospital, {foreignKey: 'HospitalID'});

Clinic.hasMany(Patient, {foreignKey: 'ClinicID'});
Patient.belongsTo(Clinic, {foreignKey: 'ClinicID'});

module.exports = {
    Hospital,
    Clinic,
    Doctor,
    Patient,
    Laboratory,
    SupportStaff
}