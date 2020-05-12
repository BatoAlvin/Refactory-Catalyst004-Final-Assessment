const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const patientRoutes = require('./routes/patientRoutes')
// const config = require('./config/database')
// const path = require('path')

const server = express()

//http parsing middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', patientRoutes)

server.use(express.static('public'))
server.set('view engine','pug')

// Database Startup: #mongod --config /usr/local/etc/mongod.conf
mongoose.connect('mongodb://localhost:27017/techAss', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
   if (err) throw err;
   console.log('Successfully connected to the database');
});
//connect to the database
// mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
//     if (err) throw err;
//     console.log('Successfully Connected');

server.listen(3600, ()=>{
    console.log('Listening on port 3600')
})

