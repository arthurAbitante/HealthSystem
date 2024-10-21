const express = require('express');
const router = express.Router();
const {ClinicalTestRequest} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const clinicaltestrequest = await ClinicalTestRequest.create(req.body);
        res.status(201).json(clinicaltestrequest);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const clinicaltestrequests = await ClinicalTestRequest.findAll();
        res.status(200).json(clinicaltestrequests);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;