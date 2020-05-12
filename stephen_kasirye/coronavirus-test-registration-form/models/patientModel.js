const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    surName: String,
    givenName: String,
    dob: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String
});

module.exports = mongoose.model('Patient', patientSchema);