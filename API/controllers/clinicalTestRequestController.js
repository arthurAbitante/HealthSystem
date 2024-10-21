const {ClinicalTestRequest} = require('../models');

const createClinicalTestRequest = async (req, res) => {
    try{
        const clinicaltestrequest = await ClinicalTestRequest.create(req.body);
        res.status(201).json(clinicaltestrequest);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getClinicalTestRequests = async (req, res) => {
    try{
        const clinicaltestrequests = await ClinicalTestRequest.findAll();
        res.status(200).json(clinicaltestrequests);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createClinicalTestRequest,
    getClinicalTestRequests
};