const express = require('express');
const router = express.Router();
const User= require("../models/regModel");


router.get("/", async (req, res) => {
    try {
      let items = await User.find();
      res.render("patient", { users: items });
    } catch (error) {
      console.log("Could not fetch patients from the database");
    }
  });

module.exports = router;