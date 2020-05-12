const express = require('express');
const router = express.Router();
const path = require('path');
const Patient = require('../models/patientModel')

//patient input request route
router.get('/form', (req, res) => {
    //res.render('form')
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
})

//create new patient route
router.post('/addpatient', async(req, res) => {
    try {
        let patient = new Patient(req.body);
        await patient.save()
        console.log('patient saved to database');
        res.redirect('/allpatients')
    } catch (error) {
        res.status(400).send("unable to save to database")
    }
})

//retrieve all patients
router.get('/allpatients', async(req, res) => {
    try {
        let items = await Patient.find();
        res.render('patientList', { patients: items })
    } catch (error) {
        res.status(400).send("unable to find items in database")
    }
})

//retrieve single patient


//delete patient


//update patient details

module.exports = router;