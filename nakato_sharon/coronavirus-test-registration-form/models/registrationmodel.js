//Connecting to database by creating mongoose
const mongoose = require("mongoose");

//Creating schemas with their data types
var nameSchema = new mongoose.Schema({
    surname: String,
    givename: String,
    dob: Number,
    residence: String,
    occupation: String,
    nationality: Date,
    gender: String,
    category: String
  });
  
  module.exports = mongoose.model("user",nameSchema);