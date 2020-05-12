//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");

var registerSchema = new mongoose.Schema({
    surName: String,
    givenName: String,
    dateOfBirth: Date,
    nationalty: String,
    gender: String,
    category:String

});

module.exports = mongoose.model("Patient", registerSchema);
