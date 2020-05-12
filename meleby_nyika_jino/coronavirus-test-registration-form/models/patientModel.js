const mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    surName: String,
    givenName: String,
    gender: String,
    dob: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
    
});

module.exports = mongoose.model("Patient", registerSchema);