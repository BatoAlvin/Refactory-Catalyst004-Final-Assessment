const express = require('express')
const router = express.Router()
const path = require('path');
//Import the model
//The model enables interaction to the database
const User = require('../models/userModel')

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
})

router.post("/", async (req, res) => {
    try {
        let user = new User(req.body);
        console.log(req.body);
        
       
        await user.save()
        console.log("Registration was successful");
        

        res.redirect("/register");
    } catch (error) {
        console.log(error);

        res.status(400).sendFile(path.join(__dirname, '../views', 'error.html'));
    }
});

router.get("/register", (req, res) => {
    // res.sendFile(path.join(__dirname, '../views', 'register.html'));
res.render('register',{message:"Registration was successful"})
})

//Export router
module.exports = router;