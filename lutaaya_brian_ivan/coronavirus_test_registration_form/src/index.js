// import all the dependencies
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Declare the constants
const PORT = 5000;
const DB_URI = 'mongodb://localhost:27017/coronavirus';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Initialize the application
const app = express();

// Initialize the middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Template engine definition
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// The endpoints
app.use('/', routes);

// Define route to access the static files
app.use('/static', express.static(path.join(__dirname, './../public')));

mongoose.connect(DB_URI, options, (error) => {
  if (error) throw error;
  console.log(`The Database is running ...`);
});

app.listen(PORT, () => {
  console.log(`The server is listening on PORT ${PORT}`);
});
