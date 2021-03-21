const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true},
    regno: {type: Number, require: true},
    class: {type: String, require: true},
    gender: {type: String, require: true},
    email: {type: String, require: true},
    address: {type: String, require: true}
});

module.exports = mongoose.model('Student',StudentSchema);