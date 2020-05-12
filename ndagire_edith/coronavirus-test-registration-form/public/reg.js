//Defining function with a name validate
function validate() {
  //Accessing form elements via form attribute
  var usurname = document.regpatient.surname;
  var ugivenname = document.regpatient.givenname;
  var upor = document.regpatient.por;
  var uocc = document.regpatient.occ;
  var unation = document.regpatient.nation;
  var umsex = document.regpatient.male;
  var ufsex = document.regpatient.female;
  //Validating different form elements from line 23 to 65
  if (surnamevalidation(usurname, 1, 16)) {
    if (givennamevalidation(ugivenname, 1, 16)) {
      if (residence_validation(upor)) {
        if (validate_occupation(uocc)) {
          if (validate_nationality(unation)) {
            if (validsex(umsex, ufsex)) {
            }
          }
        }
      }
    }
  }
  return false;
}

//Defining a method to access the value of the object surnamevalidation and 3 parameters
function surnamevalidation(usurname, mx, my) {
  var usurname_len = usurname.value.length;
  if (usurname_len == 0 || usurname_len >= my || usurname_len < mx) {
    //Make an alert when  the condition is not fulfilled with a popup
    alert(
      "Surname should not be empty / length be between " + mx + " to " + my
    );
    usurname.focus();
    return false;
  }
  return true;
}

function givennamevalidation(ugivenname, max, min) {
  var ugivenname_len = ugivenname.value.length;
  if (ugivenname_len == 0 || ugivenname_len >= min || ugivenname_len < max) {
    //Make an alert when  the condition is not fulfilled with a popup
    alert(
      "Given name should not be empty / length be between " + max + " to " + min
    );
    ugivenname.focus();
    return false;
  }
  return true;
}

//Defining a method to access the value of the object residencest_val and a parameter
function residence_validation(upor) {
  //Declaring a variable numbers that stores the regular expression that will be matched against
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (upor.value.match(letters)) {
    return true;
  } else {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("Place of residence must have alphabet characters only");
    upor.focus();
    return false;
  }
}

function validate_occupation(uocc) {
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (uocc.value.match(letters)) {
    return true;
  } else {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("Occupation must have alphabet characters only");
    uocc.focus();
    return false;
  }
}

function validate_nationality(unation) {
  var letters = /^[A-Za-z]+$/;
  //Statement to check whether the value input matches letters
  if (unation.value.match(letters)) {
    return true;
  } else {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("Nationality must have alphabet characters only");
    unation.focus();
    return false;
  }
}

//Defining a method passing different parameters
function validsex(umsex, ufsex) {
  x = 0;
  /* From line 300 to 310, Statements to check if the option male/female has been checked 
but not both with increaments of 1 */
  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    //Make an alert when  the condition is not fulfilled with a popup
    alert("Select Male/Female");
    umsex.focus();
    return false;
  } else {
    //Alert message observed when all conditions have been fulfilled
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
