const mongoose = require("mongoose");

var regSchema=new mongoose.Schema({
    surname: String,
    givenname: String,
    dob: Date,
    por: String,
    occ: String,
    nation: String,
    gender:String,
    category: String
});

module.exports = mongoose.model("User", regSchema);