const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();
// const session = require("express-session");
const path = require("path");




//Middleware
server.use(express.static(path.join(__dirname,'public')));

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));



//Creating a connection to database 
mongoose.connect(
  "mongodb://localhost:27017/shan-db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);


//Import routes

const indexRoute = require("./routes/registerroutes");
server.use("/register", indexRoute);

const regroutes = require('./routes/registrationroutes');
server.use('/list',regroutes);


//To access public folder
server.use(express.static('public'))


server.listen(3400,()=>{
    console.log("Listening on port 3400");
});

