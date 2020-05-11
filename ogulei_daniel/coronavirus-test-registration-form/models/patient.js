const mongoose = require('mongoose');

//Creating the schema
let patientSchema = mongoose.Schema({
    surname:{
        type: String,
        required: true
    },
    givenName:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    residence:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }              
});
let Patient = module.exports = mongoose.model('Patient', patientSchema)