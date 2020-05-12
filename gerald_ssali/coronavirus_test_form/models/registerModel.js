const mongoose = require('mongoose')

// schema registration
const registerSchema = new mongoose.Schema({
   surname: String,
   givenName: String,
   dob: Date,
   residence: String,
   occupation: String,
   nationality: String,
   gender: String,
   category: String,
})

// schema export for external use
module.exports = mongoose.model('patient', registerSchema)