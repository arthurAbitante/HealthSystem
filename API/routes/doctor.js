const express = require('express');
const router = express.Router();
const {Doctor} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;