const express = require("express");
const app = express();
const Patient = require("../model/schema");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views", "index.html"));
// });

router.get("/", (req, res) => {
	res.render("index");
});

router.post("/", async (req, res) => {
	try {
		let patient = await new Patient(req.body);
		//console.log(patient);
		patient.save();
		res.redirect("/");
	} catch (error) {
		res.send("Unable to save to db");
	}
});

module.exports = router;
