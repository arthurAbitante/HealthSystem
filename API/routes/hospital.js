const express = require('express');
const router = express.Router();
const {Hospital} = require('../models');

//create new hospital
router.post('/', async(req, res) => {
    try {
        const hospital = await Hospital.create(req.body);
        res.status(201).json(hospital);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const hospitals = await Hospital.findAll();
        res.status(200).json(hospitals);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;