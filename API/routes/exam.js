const express = require('express');
const router = express.Router();
const {Exam} = require('../models');

//create new doctor
router.post('/', async(req, res) => {
    try {
        const exam = await Exam.create(req.body);
        res.status(201).json(exam);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
    try{
        const exams = await Exam.findAll();
        res.status(200).json(exams);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;