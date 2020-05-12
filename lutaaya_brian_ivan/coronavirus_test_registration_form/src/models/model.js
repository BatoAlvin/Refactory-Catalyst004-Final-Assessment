const mongoose = require('mongoose');

const patientSchema = require('./schema');

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
