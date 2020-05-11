const express =require("express");
const router = express.Router();
const path = require("path");
const server = express();
const User = require("../models/patientModels");


// Get route to display addPatient registration form

router.get("/addPatient",async(req,res)=>{
    if(req.session.user){
        try{
            res.render("/addPatient");
            // The catch block to handle parsing errors
        }catch{
            res.status(500).send("Unable to display salesReg form")
        }
    }else{
        res.redirect("/");
    }
})



// Routes to save the pateints into the database

router.post("/",async(req,res)=>{
    try{
        let patients = await new addPatient(req.body);
        // console.log(sales)
        patients.save();
        res.redirect("/addPatient");
    }catch(err){
        res.status(404).send("Failed to save Patients to the database")

    }

}); 

module.exports=router

