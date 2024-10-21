const {DoctorPatient} = require('../models');

const createDoctorPatient = async (req, res) => {
    try{
        const doctorpatient = await DoctorPatient.create(req.body);
        res.status(201).json(doctorpatient);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getDoctorPatients = async (req, res) => {
    try{
        const doctorpatients = await DoctorPatient.findAll();
        res.status(200).json(doctorpatients);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createDoctorPatient,
    getDoctorPatients
};