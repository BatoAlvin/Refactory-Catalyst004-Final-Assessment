const mongoose = require("mongoose");

var patientSchema = new mongoose.Schema({
	surname: String,
	givenname: String,
	date: Date,
	residence: String,
	work: String,
	nation: String,
	residence: String,
	radio: String,
	category: String,
});

module.exports = mongoose.model("Patient", patientSchema);
