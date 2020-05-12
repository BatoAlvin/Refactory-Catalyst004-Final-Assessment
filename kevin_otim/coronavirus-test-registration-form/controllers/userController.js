const Patient = require('../model/userModel');

//get form controller
exports.get_form = async(req,res)=>{
 try{
  res.render('index')
 }catch(err){
  console.log(err)
 }
};

//post form controller
exports.post_form = async(req,res)=>{
 try{
 let newPatient = await Patient(req.body);
 newPatient.save((err,patient)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(patient){
   req.flash("success", "Registration was successfull!");
   res.render("index", { successes: req.flash("success") });}
 })
 }catch(err){
  console.log(err)
 }
}