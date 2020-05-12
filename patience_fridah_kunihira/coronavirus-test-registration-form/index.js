const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const path = require("path");


const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use(express.static("public"));
server.set('view engine','pug')
server.set('views', __dirname + '/views');

mongoose.connect(
    "mongodb://localhost:27017/coronavirus",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
      if (err) throw err;
      console.log("Successfully connected to database");
    });
  
  


server.use('/',userRoutes)


server.listen(4040,()=>{
    console.log('listening on 4040')
});