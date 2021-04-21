const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    email: String,
    name: String,
    company: String, 
    tel: Number, 
    capacity: Number, 
    location: String,
    about: String
});

module.exports = mongoose.model('banquet', newSchema);