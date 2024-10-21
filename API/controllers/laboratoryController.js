const {Laboratory} = require('../models');

const createLaboratory = async (req, res) => {
    try{
        const laboratory = await Laboratory.create(req.body);
        res.status(201).json(laboratory);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getLaboratories = async (req, res) => {
    try{
        const laboratory = await Laboratory.findAll();
        res.status(200).json(laboratory);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createLaboratory,
    getLaboratories
};