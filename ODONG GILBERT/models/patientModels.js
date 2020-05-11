const mongoose = require("mongoose");

var patientschema =new mongoose.Schema({
    name1:String,
    name2:String,
    dob:Date,
    place:String,
    sex:String,
    type:String

})

module.exports=mongoose.model("patient",patientschema)