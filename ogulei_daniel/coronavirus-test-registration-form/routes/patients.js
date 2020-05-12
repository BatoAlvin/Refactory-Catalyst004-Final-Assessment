const express = require('express');
const router = express.Router();

//bring in models
let Patient = require("../models/patient");
  
// Add executive route
  router.get("/add", (req, res) => {
    res.render("add_patient", {
      title: "Add Patient",
    });
  });

  //Add executive post route.
  router.post("/add", (req, res) => {
    let patient = new Patient();
    patient.surname = req.body.surname;
    patient.givenName = req.body.givenName;
    patient.dob = req.body.dob;
    patient.residence = req.body.residence;
    patient.occupation = req.body.occupation;
    patient.nationality = req.body.nationality;
    patient.rating = req.body.rating;
    patient.category = req.body.category;

    
  
    patient.save((err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.redirect("/");
      }
    });
  });  

  //load edit form.
    //Load edit form
    router.get("/edit/:id", (req, res) => {
        Patient.findById(req.params.id, (err, patient) => {
          res.render("edit_patient", {
            patient: patient,
          });
        });
      });

//Update patient submit post route.
  router.post("/edit/:id", (req, res) => {
    let patient = {}
    patient.surname = req.body.name;
    patient.givenName = req.body.givenName;
    patient.dob = req.body.dob;
    patient.residence = req.body.residence;
    patient.occupation = req.body.occupation;
    patient.nationality = req.body.nationality;
    patient.rating = req.body.rating;
    patient.category = req.body.category;    

    let query = {_id:req.params.id}
  
    Patient.update(query, patient, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.redirect("/");
      }
    }); 
  });

  //delete patient route
  router.delete('/:id', (req,res) => {
    let query = {_id:req.params.id}
  
    Patient.remove(query, (err) => {
      if(err){
        console.log(err);
      }
      res.send('Succes');
    });
  });  

    //Get single executive
router.get("/:id", (req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
      res.render("patient", {
        patient: patient,
      });
    });
  });

  module.exports = router;