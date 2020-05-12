//Import external modules
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Patient = require('./models/patientModel')

const userRoutes = require('./controllers/userRoutes')

//setting static file access
server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'pug');

//Parsing input to JSON
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//app defined middleware
server.use('/', userRoutes)

//connection to database
mongoose.connect("mongodb://localhost:27017/coronaTest", { useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(error) throw error
    console.log("Successfully connected to database");
})

//Server connection
server.listen(3000, () => {
    console.log('listening on 3000');
})