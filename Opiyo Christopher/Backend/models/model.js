const mongoose = require("mongoose"),
  { Schema } = mongoose;

const application = new Schema({
  surName: {
    type: String,
    min: 1,
    max: 16,
    required: true,
  },
  givenName: {
    type: String,
    min: 1,
    max: 16,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("application", application);
