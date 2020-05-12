const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const patients = require('./routes/patients')
const server = express()

//Middleware to manage static files
server.use(express.static('public'))

//Middleware to set the default view engine
server.set('view engine','pug')   

//Http parsing middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Routing middleware
server.use('/', patients)

//connect to the database
mongoose.connect('mongodb://localhost:27017/covid19', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) throw err;
    console.log('Successfully Connected');
    server.listen(5001, () => {
        console.log('Listening on 5001')         
    })
});


