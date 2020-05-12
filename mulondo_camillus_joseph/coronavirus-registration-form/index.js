const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// app instance

const app = express();

// varaible for routes
var registerRoutes = require("./routes/routes");

// configure app and setting the templating engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //setting the views folder to be views

//Connecting to the database
mongoose.set("useFindAndModify", false);
mongoose.connect(
  "mongodb://localhost:27017/coronavirus",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;

    console.log("Successfully connected");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// setting up the routes
app.use("/", registerRoutes);

// LISTENER
let port = 3003;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
