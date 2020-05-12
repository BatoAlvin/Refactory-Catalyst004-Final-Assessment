const mongoose = require('mongoose');

const { Schema } = mongoose;

const patientSchema = new Schema({
  surname: String,
  givenname: String,
  dateOfBirth: Date,
  residence: String,
  occupation: String,
  nationality: String,
  gender: String,
  category: String
});

module.exports = patientSchema;
