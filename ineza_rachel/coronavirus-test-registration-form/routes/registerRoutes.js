//Requiring dependencies used during routing
const express = require("express");
const router = express.Router();
const User = require ("../models/registerModels");
const path = require("path");

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"../views", "index.html"));
});

router.post('/', async (req, res)=>{
    try{
        const user = User(req.body)
        await user.save()
    } catch (error){
        console.log(error)
        res.status(400, "unablity to save to the database")
    }
})

//Exporting the routes for external use
module.exports = router;