const express = require('express');
const router = express.Router();
const Patient = require('../models/registerPatientmodels');
const path = require('path');

router.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname, '../views', 'registerPatient.html'));
})


router.post ('/register/addPatient', async (req, res)=>{
    try{
        var myData = new Patient(req.body);
        await myData.save()
        console.log('Patient has been added.')
        res.redirect('/register/patientList')
    }catch (error){
            res.status(400).send("unable to save to database");
        }
})

router.get('/patientList',async(req, res) => {  
    try {
      let items = await User.find()
      if (req.query.fname){
      items = await User.find({fname:req.query.fname})
          }
          res.render('patientList.pug', { users: items })
        } catch (err) {
          res.status(400).send("unable to find items in the database");
        }
      });


module.exports = router;
