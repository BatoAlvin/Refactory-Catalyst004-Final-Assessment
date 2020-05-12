// requiring dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var postRouter = require("./routes/post");

const Patient = require("./model/schema");

app.set("view engine", "pug");

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));
app.use("/static", express.static("public"));

//middileware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", postRouter);

//database connection
mongoose.connect(
	"mongodb://localhost:27017/covid_db",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	function(err) {
		if (err) throw err;
		console.log("Database connected");
	}
);

// listening on port
app.listen(8000, () => {
	console.log("App listening on port 8000");
});
