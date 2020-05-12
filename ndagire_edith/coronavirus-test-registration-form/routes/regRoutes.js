const express = require('express');
const router = express.Router();
const User= require("../models/regModel");

router.get("/", (req, res) => {
  res.render("reg");
});


router.post("/", async (req, res) => {
  const myData = new User(req.body);
    try{
    await myData.save();
      console.log("item has been saved to database")
        res.redirect("/register")
      } catch (error) {
        console.log(error)
        res.status(400).send("unable to save to database");
      }
    });

module.exports = router;