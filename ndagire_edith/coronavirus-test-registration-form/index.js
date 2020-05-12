//Declare a variable express require the module express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();

const User = require("./models/regModel");

const PORT = 8000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

server.set("view engine", "pug");
server.set("views", __dirname + "/views");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//Creating a connection to database
mongoose.connect("mongodb://localhost:27017/covid_reg", options, (error) => {
  if (error) throw error;
  console.log("Connected to the database");
});

//Requiring routes
const regRoutes = require("./routes/regRoutes");
server.use("/register", regRoutes);

const userRoutes = require("./routes/userRoutes");
server.use("/patient", userRoutes);

server.use(express.static("public"));



server.listen(PORT, (error) => {
  if (error) throw error;
  console.log("listening on PORT " + PORT);
});
