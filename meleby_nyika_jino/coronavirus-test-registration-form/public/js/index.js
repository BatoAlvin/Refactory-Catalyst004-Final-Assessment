var surName = document.forms['pform']['surName'];
var givenName = document.forms['pform']['givenName'];
var gender = document.forms['pform']['gender'];
var dob = document.forms['pform']['dob'];
var nationality = document.forms['pform']['nationality'];
var residence = document.forms['pform']['residence'];
var occupation = document.forms['pform']['occupation'];
var category = document.forms['pform']['category'];


var surName_error = document.getElementById('surName_error');
var givenName_error = document.getElementById('givenName_error');
var gender_error = document.getElementById('gender_error');
var dob_error = document.getElementById('dob_error');
var residence_error = document.getElementById('residence_error');
var occupation_error = document.getElementById('occupation_error');
var nationality_error = document.getElementById('nationality_error');
var category_error = document.getElementById('category_error');


function Validate() {
    var letters = /^[A-Za-z]+$/;
    
    var surName_len = surName.value.length
    var givenName_len = givenName.value.length
    var residence_len = residence.value.length
    var occupation_len = occupation.value.length
    var nationality_len = nationality.value.length
    
    //Validate Sur name
    if (surName_len < 2 || surName_len > 15 ) {
      surName_error.style.color = "red";
      surName.style.border = "1px solid red";     
      surName_error.textContent = "Surname must be between 1-16 letters";
      return false 
    }
    if(surName.value.match(letters) == null){
      surName_error.style.color = "red";     
      surName.style.border = "1px solid red";
      surName_error.textContent = "Surname must contain only letters";
      return false
    }
       
    //Validate Given name
    if (givenName_len <2 || givenName_len > 15 ) {
      givenName_error.style.color = "red";
      givenName.style.border = "1px solid red";
      givenName_error.textContent = "Given name must be between 1-16 letters";
      return false
    }
    if (givenName.value.match(letters) == null){
      givenName_error.style.color = "red";
      givenName.style.border = "1px solid red";
      givenName_error.textContent = "Given name must contain only letters";
      return false      
    }

    //Validate Date of Birth
    if (dob.value == "") {
        dob_error.style.color = "red";
        dob.style.border = "1px solid red";
        dob_error.textContent = "Date of Birth is required";
        return false        
    }  

     //Validate Place of Residence
     if (residence_len <2 || residence_len > 19) {
      residence_error.style.color = "red";
      residence.style.border = "1px solid red";
      residence_error.textContent = "Residence must contain between 1-20 letters";
      return false               
     }
     if (residence.value.match(letters) == null) {
        residence_error.style.color = "red";
        residence.style.border = "1px solid red";
        residence_error.textContent = "Residence must contain only letters";
        return false               
     }
  
   //Validate Occupation
    if (occupation_len < 5 || occupation_len > 49) {
      occupation_error.style.color = "red";
      occupation.style.border = "1px solid red";
      occupation_error.textContent = "Occupation should contain between 6-49 letters";     
      return false   
    }  
    if (occupation.value.match(letters) == null) {
        occupation_error.style.color = "red";
        occupation.style.border = "1px solid red";
        occupation_error.textContent = "Occupation must contain only letters";        
        return false

    }  

    //Validate nationality
    if (nationality.value.match(letters) == null) {
      nationality_error.style.color = "red";
      nationality.style.border = "1px solid red";
      nationality_error.textContent = "Nationality should contain only letters";
      return false
    }
    if (nationality_len < 5 || nationality_len > 19) {
      nationality_error.style.color = "red";
      nationality.style.border = "1px solid red";
      nationality_error.textContent = "Nationality should contain between 6-19 letters";
      return false
    } 
    
    //Validate Category field
    if (category.value == "--Select Category--") {
      category_error.style.color = "red";
      category.style.border = "1px solid red";
      category_error.textContent = "Select category from dropdown menu";     
      return false;
    }    


}
  
