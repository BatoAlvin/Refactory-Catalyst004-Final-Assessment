//Connecting to database by creating mongoose
const mongoose = require("mongoose");

//Creating schemas with their data types
var nameSchema = new mongoose.Schema({
    surname: String,
    firstname: String,
    date: String,
    location: String,
    job: String,
    origin: String,
    gen: String,
    category: String
  });
  
  module.exports = mongoose.model("user",nameSchema);