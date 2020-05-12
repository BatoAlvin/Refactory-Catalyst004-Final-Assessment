const express = require("express");
const router = express.Router();
const path = require("path");
const bodyparser = require("body-parser");

const Patient = require("../models/registrationModels");

// get registration page
router.get("/", (req, res) => {
  res.render("registration");
});
//  posting and saving to the database

router.post("/", async (req, res) => {
  try {
    var myPatient = new Patient(req.body);
    await myPatient.save();
    console.log(req.body);
    console.log("new individual has been added");
    // res.redirect(/userlist)
  } catch (error) {
    console.log(error);

    res.status(400).send("unable to save to the database");
  }
});

module.exports = router;
