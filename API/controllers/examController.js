const {Exam} = require('../models');

const createExam = async (req, res) => {
    try{
        const exam = await Exam.create(req.body);
        res.status(201).json(exam);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getExams = async (req, res) => {
    try{
        const exam = await Exam.findAll();
        res.status(200).json(exam);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.export = {
    createExam,
    getExams
};