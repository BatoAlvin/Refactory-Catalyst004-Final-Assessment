const express = require('express')
const server = express()
const path = require('path')
server.use('/static', express.static(path.join(__dirname, 'public')))

// database connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/covid',
   { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) throw error;
      console.log('succesfully connected to database')
   })

// middleware
server.set('views', __dirname + '/views')
server.set('view engine', 'pug')

const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


// imported routes
const registerRoute = require('./routes/registerRoute')
server.use('/register', registerRoute)


// listening port
const PORT = process.env.PORT || 5500
server.listen(PORT, console.log(`Listening on port ${PORT}`))