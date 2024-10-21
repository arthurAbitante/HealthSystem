const express = require('express');
const router = express.Router();
const {Laboratory} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const laboratory = await Laboratory.create(req.body);
        res.status(201).json(laboratory);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const laboratories = await Laboratory.findAll();
        res.status(200).json(laboratories);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;