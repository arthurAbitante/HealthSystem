const express = require('express');
const router = express.Router();
const {OutPatientClinic} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const outpatientclinic = await OutPatientClinic.create(req.body);
        res.status(201).json(outpatientclinic);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const outpatientclinics = await OutPatientClinic.findAll();
        res.status(200).json(outpatientclinics);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;