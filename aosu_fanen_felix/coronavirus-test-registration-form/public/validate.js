function formRegistration() {
    var surname = document.patientRegistration.surName;
    var givenName = document.patientRegistration.givenName;
    var dateOfBirth = document.patientRegistration.dob
    var residence = document.patientRegistration.placeOfResidence
    var occupation = document.patientRegistration.occupation
    var nationality = document.patientRegistration.nationality
    var category = document.patientRegistration.cat
    

    if (validatesurname(surname)) {
        if (validategivenName(givenName)) {           
                        if (validatedateOfBirth(dateOfBirth)) {
                            if (validateresidence(residence)) {
                                if (validateoccupation(occupation)) {
                                    if (validatenationality(nationality)) {
                                        if (validatecategory(category)) {


                        }

                    }

                }

            }
        }
   }
}
    return false;

}
// Validate Sur Name
function validatesurname(surname){
    var letters = /^[A-Za-z]+$/;
    if(surname.value.match(letters)){
        return true;
    }
    else {
        surname.style.border = "2px solid red";
        document.getElementById('surname_div').style.color = "red";
        surName_error.textContent = "This field is required";
        surname.focus();
      
        return false;
    }   
  }


  // Validate Given Name
function validategivenName(givenName){
    var letters = /^[A-Za-z]+$/;
    if(givenName.value.match(letters)){
        return true;
    }
    else {
        givenName.style.border = "2px solid red";
        document.getElementById('givenName_div').style.color = "red";
        givenName_error.textContent = "This field is required";
        givenName.focus();
        
        return false;
    }   
  }



//Validate Date of Birth
function validatedateOfBirth(dateOfBirth) {
    if (dateOfBirth.value != "") {

        return true;
    }
    else {

        dateOfBirth.style.border = "2px solid red";
        document.getElementById('dob_div').style.color = "red";
        dob_error.textContent = "Date of birth is required";
        dateOfBirth.focus();

        return false;

    }
}


// Validate place of residence
function validateresidence(residence){
    var letters = /^[A-Za-z]+$/;
    if(residence.value.match(letters)){
        return true;
    }
    else {
        residence.style.border = "2px solid red";
        document.getElementById('resedence_div').style.color = "red";
        residence_error.textContent = "This field is required";
        residence.focus();
        
        return false;
    }   
  }

// Validate Occupation
function validateoccupation(occupation){
    var letters = /^[A-Za-z]+$/;
    if(occupation.value.match(letters)){
        return true;
    }
    else {
        occupation.style.border = "2px solid red";
        document.getElementById('occupation_div').style.color = "red";
        occupation_error.textContent = "This field is required";
        occupation.focus();
      
        return false;
    }   
  }

  //Validate Nationality
  function validatenationality(nationality){
    var letters = /^[A-Za-z]+$/;
    if(nationality.value.match(letters)){
        return true;
    }
    else {
        nationality.style.border = "2px solid red";
        document.getElementById('nationality_div').style.color = "red";
        nationality_error.textContent = "This field is required";
        nationality.focus();
      
        return false;
    }   
  }

  //Validate Category
  function validatecategory(category){
    var letters = /^[A-Za-z]+$/;
    if(category.value.match(letters)){
        alert('Form Succesfully Submitted');
        return true;
    }
    else {
        category.style.border = "2px solid red";
        document.getElementById('category_div').style.color = "red";
        category_error.textContent = "This field is required";
        category.focus();
      
        return false;
    }   
  }