const {Hospital} = require('../models');

const createHospital = async (req, res) => {
    try{
        const hospital = await Hospital.create(req.body);
        res.status(201).json(hospital);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getHospitals = async (req, res) => {
    try{
        const hospital = await Hospital.findAll();
        res.status(200).json(hospitals);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createHospital,
    getHospitals
};