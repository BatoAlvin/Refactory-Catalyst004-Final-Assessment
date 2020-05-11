const express = require("express");
const bodyParser=require("body-parser");
const mongooose=require("mongoose");
const path =require("path");

const registerPatient = require("./routes/registerPatient");

const patientModels = require("./models/patientModels");

const server = express();

server.set("view engine",'pug');
server.set("views", __dirname + "/views");

server.use(express.static("public"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));


// connecting to the database
mongooose.connect(
    "mongodb://localhost:27017/covid-19",
    {useNewUrlParser:true,useUnifiedTopology:true},
    function (err){
        if (err){
            if (err) throw err 
            console.log("Connwcted Sucessfully")
        
        }
    }
)


server.use("/patient",registerPatient)
server.listen(4000,function(){
    console.log("Listening at port 4000")
})
