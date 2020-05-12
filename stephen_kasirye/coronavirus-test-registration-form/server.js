// EXPRESS APP
const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
require('dotenv').config();
const server = express();

// DATABASE
mongoose.connect(process.env.DB_CONN, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false}, (err) => {
    if (err) throw err
    console.log("Successfully connected to the Database");
});

// MIDDLEWARE
server.set('view engine', 'pug');
server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}))

// ROUTES
server.use("/", patientRoutes)

// ERROR HANDLER
server.get('*', (req, res) => {res.send("404: the page you have requested is unavailable")})

// LISTENER
server.listen(PORT, () => {console.log(`Listening on Port: ${PORT}`)});