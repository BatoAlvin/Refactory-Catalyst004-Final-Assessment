const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var patientSchema = new mongoose.Schema({
    surname: String,
    givenname: String,
    dob: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String, 


  });

  patientSchema.plugin(passportLocalMongoose, {usernameField: 'emailAd'})

module.exports = mongoose.model("Patient", patientSchema);

