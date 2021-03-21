const Student =require('../models/student.model')
const Joi = require('joi');

exports.student_create=(req,res)=>{

    let student = new Student({
        name: req.body.name,   
        regno: req.body.regno,
        class: req.body.class,
        gender: req.body.gender,
        email: req.body.email,
        address: req.body.address,
    });
    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send('Student Created Successfully');
    });
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id, (err,student)=>{
        if(err) return next(err);
        res.send(student);
    });
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body}, (err,student)=>{
        if(err) return next(err);
        res.send('Student Updated');
    })
}

exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id, (err,student)=> {
        if(err) return next(err);
        res.send('Student Deleted');
    });
}