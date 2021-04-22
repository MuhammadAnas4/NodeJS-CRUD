const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

let StudentSchema = new Schema({
    name: {type: String, require: true},
    regno: {type: Number, require: true},
    class: {type: String, require: true},
    gender: {type: String, require: true},
    email: {type: String, require: true},
    address: {type: String, require: true},
    password: {type: String, require: true}
});

StudentSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next(); 
});

module.exports = mongoose.model('Student',StudentSchema);

