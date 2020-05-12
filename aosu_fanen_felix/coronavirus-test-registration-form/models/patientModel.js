//The schema that shows the architectural strurcture of the database
//Begining of customer schema
const mongoose = require('mongoose')
var patientSchema = new mongoose.Schema({
    surName: String,
    givenname: String,
    dateofbirth: String,
    nationality: String,
    occupation: String,
    gender: String,
    category: String,
});
//End of patient Schema
//
module.exports = mongoose.model("Patient", patientSchema);