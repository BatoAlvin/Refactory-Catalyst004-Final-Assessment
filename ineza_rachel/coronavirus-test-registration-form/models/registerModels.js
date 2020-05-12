//Requiring the mongoose dependency
const mongoose = require("mongoose")

//Schema for the registration
const registerSchema = new mongoose.Schema({
    surname: String,
    givenname: String,
    DOB: String,
    residencename: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
})
//Exporting the schema for external use
module.exports = mongoose.model('user', registerSchema)