const express = require('express');
const router = express.Router();
const {Patient} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;