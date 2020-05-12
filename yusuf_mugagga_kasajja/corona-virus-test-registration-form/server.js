const express = require('express')
const server = express()
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const nodemon = require('nodemon')
const bodyParser = require('body-parser')
const session = require('express-session');
const patientRoutes = require('./routes/patientRoutes')
const Patient = require('./models/patientModel')


mongoose.connect('mongodb://localhost:27017/patients',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log('You are live');
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

server.set('views',path.join(__dirname,'views'));
server.set('view engine','pug');

server.use(express.static('public'))

server.use('/', patientRoutes)

server.get('*',(req,res)=>{
    res.send('Error')
})

server.listen(6500,()=>{
    console.log('listening on port 6500');
    
})