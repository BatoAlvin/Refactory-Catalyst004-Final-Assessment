const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const passport = require('passport')
const registerRoute = require('./routes/registerRoute');
const User = require('./models/userModel')
const app = express()

//Setting the Engine view which contains the pug file
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
// app.use('/', registerRoute)
app.use('/', registerRoute)
app.use('/index2', registerRoute)

// passport.use(User.createStrategy())
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

mongoose.connect("mongodb://localhost:27017/Refactory-Catalyst004-Final-Assessment", { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected');

    });

app.listen(3008, () => {
console.log(('Application listening on port 3008'));

})