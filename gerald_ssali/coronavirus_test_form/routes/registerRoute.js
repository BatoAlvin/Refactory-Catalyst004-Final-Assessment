const express = require('express')
const router = express.Router()
const path = require('path')
const Patient = require('../models/registerModel')


// registration form route
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'patientRegister.html'))
})


// save registered patients to database
router.post('/patients', async (req, res) => {
   try {
      const patient = new Patient(req.body)
      // console.log(patient)
      await patient.save()
      res.redirect('back')
   } catch (error) {
      console.log(error)
      res.status(400, 'Unable to save to database')
   }
})

// all registered patients
router.get('/allpatients', async (req, res) => {
   try {
      const patients = await Patient.find()
      res.render('patientList', { allpatients: patients })
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to find patients')
   }
})

// export for external use
module.exports = router;