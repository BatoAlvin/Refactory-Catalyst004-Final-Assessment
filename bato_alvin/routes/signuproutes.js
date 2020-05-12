const express = require("express");

const router = express.Router();

const User = require('../models/registrationmodel');

//Getting adminregistration page
router.get('/',(req,res)=>{
    res.render('registration')

  })

//Saving input information and then routing to next page
router.post("/", async (req, res) => {
  const myData = new User(req.body);
    try{
    await myData.save();
      console.log("item has been saved to database")
      
        res.redirect("/reglist")
        
    
      } catch (error) {
        console.log("error message")
        res.status(400).send("unable to save to database");
      }
    });
  
  module.exports = router;

  
   
      
      