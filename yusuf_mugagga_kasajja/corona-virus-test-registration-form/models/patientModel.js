const mongoose = require('mongoose')

var patientSchema = new mongoose.Schema({
    surname:String,
    givenname:String,
    dob:String,
    residence:String,
    occupation:String,
    nationality:String,
    gender:String,
    category:String
})
module.exports = mongoose.model("Patient", patientSchema)