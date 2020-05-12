//Include mongoose package in userModel
const mongoose = require("mongoose");

//Create a new schema
var nameSchema = new mongoose.Schema({
    surname: String,
    givenName: String,
    DOB: Date,
    residence:String,
    occupation: String,
    nationality:String,
    gender:String,
    category:String
    
});

//Create model and export it
module.exports = mongoose.model("user", nameSchema);
