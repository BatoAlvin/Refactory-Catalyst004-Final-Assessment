const express =require("express");
const router = express.Router();
const path = require("path");
const server = express();
const User = require("../models/patientModels");


// Routes for patient registration
server.get("/", (req, res) => {
    res.render("addPatient");
  });
  


router.get("/addPatient",async(req,res)=>{
    if(req.session.user){
        try{
            res.render("addPatient");
            // The catch block to handle parsing errors
        }catch{
            res.status(500).send("Unable to display Add patient form")
        }
    }else{
        res.redirect("/");
    }
})



// Routes to save the sales into the database

router.post("/patientList",async(req,res)=>{
    try{
        let patient = await new addPatient(req.body);
        // console.log(sales)
        patient.save();
        res.redirect("/user/addPatient");
    }catch(err){
        res.status(404).send("Failed to save sales to the database")

    }

}); 
module.exports=router

