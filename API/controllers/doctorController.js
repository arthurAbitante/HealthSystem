const {Doctor} = require('../models');

const createDoctor = async (req, res) => {
    try{
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getDoctors = async (req, res) => {
    try{
        const doctor = await Doctor.findAll();
        res.status(200).json(doctors);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createDoctor,
    getDoctors
};