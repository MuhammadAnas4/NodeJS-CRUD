const Student = require('../models/student.model')
const Joi = require('joi');
const bcrypt = require('bcryptjs');

exports.student_details = async (req, res) => {
    try{
    const student = await Student.findById(req.params.id);
        res.status(200).send(student);
    } catch(err){
        return res.status(400).send("ID NOT FOUND");
    }
}

exports.student_update = async (req, res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.status(200).send("Student update Successfully");
    } catch (err) {
        return res.status(400).send("User Does Not Exist");
    }
}

exports.student_delete = async (req, res) => {
    try{
        await Student.findByIdAndRemove(req.params.id);
        return res.status(200).send('Student Deleted');
} catch (err) {
    return res.status(400).send("User Does Not Exist");
}
}

exports.student_create = async (req, res) => {

    try {
        const userExist = await Student.findOne({ regno: req.body.regno });

        if (userExist) {
            return res.status(422).send("User Already Exist")
        }

        let student = new Student({
            name: req.body.name,
            regno: req.body.regno,
            class: req.body.class,
            gender: req.body.gender,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password,
        });

        const studentRegister = await student.save();

        if (studentRegister) {
            res.status(201).send("user register successfully");
        }

    }catch (err) {
        return res.status(400).send("Something Went Wrong");
    }
}

exports.student_login =  async (req,res) => {
    try{
        const { regno, password } = req.body;

        if( !regno || !password ){
            return res.status(400).json({error:"Plz Fill the Data"});
        }

        const userLogin = await Student.findOne({ regno: regno });
        console.log(regno);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if(!isMatch){
                res.status(400).json({ error: "Invalid Credientials" });
            }   
            else{
                res.json({ message: "User Login Successfully"});
            } 
        }
        else
        {
            res.status(400).json({ error: "Invalid Credentials"})
        }

    }catch(err){
        console.log(err);
    }
};

