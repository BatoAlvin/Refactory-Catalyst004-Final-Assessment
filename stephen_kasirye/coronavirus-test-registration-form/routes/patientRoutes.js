const express = require('express');
const path = require('path');
const Patient = require('../models/patientModel');
const router = express.Router();

// LOGIN PAGE
router.get("/", (req, res) => {res.render('login');});

// REGISTER STUDENT
router.get("/addPatient", (req, res) => {res.render('patientRegistration');});

router.post("/addPatient", async (req, res) => {
    try {
        var newPatient = new Patient(req.body);
        await newPatient.save();
        res.render("successfulRegistration");
    } catch (error) {
        console.log(error);
        res.send("Unable to save to Database");
    }
});

// LOGOUT
router.post("/logout", (req, res) => {
    req.session.user;
    logout();
});

module.exports = router;