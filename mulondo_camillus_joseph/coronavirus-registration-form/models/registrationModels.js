const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var registerSchema = new Schema({
  surname: String,
  otherName: String,
  dateOfBirth: Date,
  residence: String,
  work: String,
  country: String,
  gender: String,
  type: String,
});

module.exports = mongoose.model("Patient", registerSchema);
