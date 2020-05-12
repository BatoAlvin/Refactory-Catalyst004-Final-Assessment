const mongoose = require('mongoose');

const User = new mongoose.model('User',mongoose.Schema({
 surname:String,
 given_name:String,
 date_of_birth:Date,
 place_of_residence:String,
 occupation:String,
 nationality:String,
 gender:{
  type:String,
  enum:["Male","Female"]
 },
 category:{
  type:String,
  enum:["Returnee","Contact","Alert","Volunteer"]
 }
}));

module.exports = User;