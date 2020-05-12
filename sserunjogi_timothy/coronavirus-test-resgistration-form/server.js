const express = require('express');
const server = express();
const mongoose = require('mongoose');
const registerPatientroutes = require('./routes/registerPatientroutes.js');
const session = require('express-session');
const passport = require('passport');

const path = require('path');
const Patient = require('./models/registerPatientmodels.js');

mongoose.connect("mongodb://localhost:27017/coronavirus-test-resgistration-form",{ useNewUrlParser: true, useUnifiedTopology: true },function(err){
 
   if (err) throw err;
 
   console.log('Successfully connected');

});

server.set('views',path.join(__dirname,'views'));
server.set('view engine', 'pug');

server.use(express.static('public'));

// Requiring and setting server to use the middleware bodyParser
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(passport.initialize());
server.use(passport.session());
passport.use(Patient.createStrategy());
passport.serializeUser(Patient.serializeUser());
passport.deserializeUser(Patient.deserializeUser());

server.use(session({secret: 'thesecret`', resave: true, saveUninitialized: false }));

server.use('/register', registerPatientroutes)


server.listen(6500, function(){
    console.log('listening on port 6500')
})