const express = require('express');
const bodyParser = require('body-parser');
const student = require ('./routes/student.routes');
const mongoose = require('mongoose');
const Joi = require('joi');
mongoose.set('useFindAndModify', false);

const app = express();

mongoose.connect("mongodb://localhost/studentsDb",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('connot connect',err)
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/students', student);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening to port ${port}`)});