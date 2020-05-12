const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

//Connection to the data base
mongoose.connect("mongodb://localhost/patientdb");
let db = mongoose.connection;

//Check db connection
db.once("open", () => {
  console.log("connected to mongo db");
});
//Check db connecton errors
db.on("error", (err) => {
  console.log(err);
});

//Set sever instance
const app = express();

//bring in models
let Patient = require("./models/patient");

// Set the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//set publicfolder
app.use(express.static(path.join(__dirname, "public")));

//Home route.
app.get("/", (req, res) => {
    Patient.find({}, (err, patients) => {
      if (err) {
        console.log(err);
      } else {
        res.render("index", {
          title: "The Patients",
          patients: patients,
        });
      }
    });
  });

// Bring routes in
let patients = require('./routes/patients');
app.use('/patients', patients);  



//Starting the sever.
app.listen(3000, () => {
    console.log("Sever started on port number 3000...");
  });