const express = require('express');
const router = express.Router();
const {SupportStaff} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const supportstaff = await SupportStaff.create(req.body);
        res.status(201).json(supportstaff);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const supportstaffs = await SupportStaff.findAll();
        res.status(200).json(supportstaffs);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;