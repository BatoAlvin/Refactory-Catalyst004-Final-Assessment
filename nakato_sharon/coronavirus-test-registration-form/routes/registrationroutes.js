const express = require("express");

const router = express.Router();

const User = require('../models/registrationmodel');

//Getting salelist page with a search button for username
router.get('/',async (req, res) => {
  try {
    let items = await User.find()
    if (req.query.username) {
      items = await User.find({username:req.query.username})
    }
    res.render('list', { users: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
});

    module.exports = router;
   
      
      


