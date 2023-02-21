
const db = require("../models");
const quiz = require("../models/quiz");
const Quiz = db.quizzes; 


exports.create = async(req,res) => {

    try { 
        const data = await Quiz.create(req.body) 
        res.json({ 
            message: "quiz created succesfully",
            data: data, 
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "data eror" , 
            data : null,
        });
    } 
}


exports.getAll = async(req,res) => { 

    try {
        const quizzes = await Quiz.findAll() 
        res.json({
            message: "Quizzez retrieved succesfully",
            data: quizzes,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message , 
            data : null,
        });
    }
};


exports.update = async(req,res) => { 
    const id = req.params.id 
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true}) 
        quiz.update(req.body, { 
            where:{id}
        })
        res.json({
            message: "data  berhasil dirubah",
            data: quiz,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message|| "some error occured while retrieving quiz", 
            data : null,
        });
    }
}


exports.delete = async(req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

        quiz.destroy() 

        res.json({
            message: "quiz deleted succesfully",
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz", 
            data : null,
        });
    }
}


exports.findOne = async(req,res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true}) 
        res.json({
            message: `Quizzes retrieved succesfully woth id=${id}.`,
            data: quiz, 
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "some error occured while retrieving quiz", 
            data : null,
        });
    }
};


exports.getByCategoryId = async(req,res) => {
    const id = req.params.id 
    const quizzes = await Quiz.findAll({ 
        where : {
            categoryID: id 
        }
    })
        res.json({
            message: `Quizzes retrieved succesfully woth id=${id}.`,
            data: quizzes, 
        });
}


exports.getByLevelId = async(req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelID: id
        }
    })
        res.json({
            message: `Quizzes retrieved succesfully woth id=${id}.`,
            data: quizzes, 
        });
}