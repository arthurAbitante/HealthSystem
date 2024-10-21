const {OutPatientClinic} = require('../models');

const createOutPatientClinic = async (req, res) => {
    try{
        const outpatientclinic = await OutPatientClinic.create(req.body);
        res.status(201).json(outpatientclinic);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getOutPatientClinics = async (req, res) => {
    try{
        const outpatientclinic = await OutPatientClinic.findAll();
        res.status(200).json(outpatientclinic);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createOutPatientClinic,
    getOutPatientClinics
};