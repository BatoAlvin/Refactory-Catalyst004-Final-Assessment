const mongoose = require("mongoose");

var patientschema =new mongoose.Schema({
    name1:String,
    name2:String,
    dob:Date,
    place:String,
    occup:String,
    nin:String,
    sex:String,
    type:String

})

module.exports=mongoose.model("addPatient",patientschema)