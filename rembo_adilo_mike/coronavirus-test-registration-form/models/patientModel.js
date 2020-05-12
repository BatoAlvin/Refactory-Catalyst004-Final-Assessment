//schema and model definition
const mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
    surname: String,
    givenName: String,
    dateofBirth: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String, 
    category: String
})

//patient model
const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;