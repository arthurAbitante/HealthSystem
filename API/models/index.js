const Hospital = require('./hospital');
const OutPatientClinic = require('./outpatientclinic');
const Doctor = require('./doctor');
const Patient = require('./patient');
const Laboratory = require('./laboratory');
const SupportStaff = require('./supportstaff');
const ClinicalTestRequest = require('./clinicaltestrequest');
const DoctorPatient = require('./doctorpatient');
const Exam = require('./exam');

Hospital.hasMany(OutPatientClinic, {foreignKey: 'HospitalID'});
OutPatientClinic.belongsTo(Hospital, {foreignKey: 'HospitalID'});

Hospital.hasMany(Doctor, {foreignKey: 'HospitalID'});
Doctor.belongsTo(Hospital, {foreignKey: 'HospitalID'});

OutPatientClinic.hasMany(Patient, {foreignKey: 'ClinicID'});
Patient.belongsTo(OutPatientClinic, {foreignKey: 'ClinicID'});



module.exports = {
    Hospital,
    OutPatientClinic,
    Doctor,
    Patient,
    Laboratory,
    SupportStaff,
    ClinicalTestRequest,
    DoctorPatient,
    Exam
}