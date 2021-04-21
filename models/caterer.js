const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    email: String,
    name: String,
    company: String, 
    tel: Number, 
    cuisines: String, 
    cost: Number,
    about: String
});

module.exports = mongoose.model('caterer', newSchema);