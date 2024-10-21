const {SupportStaff} = require('../models');

const createSupportStaff = async (req, res) => {
    try{
        const supportstaff = await SupportStaff.create(req.body);
        res.status(201).json(supportstaff);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getSupportStaffs = async (req, res) => {
    try{
        const supportstaffs = await SupportStaffs.findAll();
        res.status(200).json(supportstaffs);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createSupportStaff,
    getSupportStaffs
};