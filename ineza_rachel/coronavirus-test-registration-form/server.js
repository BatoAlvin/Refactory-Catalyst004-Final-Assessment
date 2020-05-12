//Requiring production and development dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

//Requiring the routes and models
const registerRoutes = require("./routes/registerRoutes")
const registerModels = require("./models/registerModels")

//Using the dependencies that have been required above
const server = express();
server.use(express.static("public"));
server.set("view engine", "pug");
 server.use(bodyParser.json());
 server.use(bodyParser.urlencoded ({ extended: true}))

 //Using the imported route
 server.use('/register', registerRoutes)
 server.use('/list', registerModels)

//The database connection setup
 mongoose.connect("mongodb://localhost:27017/Virus-Test-Registry",
{useNewUrlParser:true, useUnifiedTopology:true},
function (err) {
   if (err) throw err;
  console.log('Successfully connected');
  }); 
server.get("*", (req, res)=>
{
    res.send("error")
})
//The listening port
server.listen(3010,()=>{
    console.log("listening on 3010")
})