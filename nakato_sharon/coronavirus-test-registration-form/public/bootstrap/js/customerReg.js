function customerRegValidation() {
  var uname = document.customerReg.fname;
  var ulast = document.customerReg.lastName;
  var unation = document.customerReg.nationality;
  var uid = document.customerReg.nin;
  var uphone = document.customerReg.phoneNumber;

  /**Invoking functions with arguments */
  if (firstnamevalidation(uname, 5,14)) {
    if (lastnamevalidation(ulast, 4,15)) {
        if (nationvalidation(unation)) {
          if(ninvalidation(uid, 13))  {
            if(phonevalidation(uphone, 10))  {
          }
        }
      }
    }
  }

  return false;
}

function firstnamevalidation(uname, mx, my) {
  //Accessing form element
  var uname_len = uname.value.length;
  if (uname_len == 0 || uname_len >= my || uname_len < mx) {
    alert(
      "First name should not be empty / length be between " + mx + " to " + my
    );
    uname.style.border = "2px solid red";
    uname.focus();
    return false;
  } else {
    uname.style.border = "2px solid white";
  }
  return true;
}

function lastnamevalidation(ulast, mx, my) {
  //Accessing form element
  var ulast_len = ulast.value.length;
  if (ulast_len == 0 || ulast_len >= my || ulast_len < mx) {
    alert(
      "Last name should not be empty / length be between " + mx + " to " + my
    );
    ulast.style.border = "2px solid red";
    ulast.focus();
    return false;
  } else {
    ulast.style.border = "2px solid white";
  }
  return true;
}

//Defining method phonevalidation with parameter
function phonevalidation(uphone) {
  // var numbers = /^[0-9]+$/;
  var numbers = /^\d{10}$/;
  if (uphone.value.match(numbers)) {
    uphone.style.border = "2px solid white"
    return true;
  } else {
    alert("Telephone code must have 10 numeric characters only");
    uphone.style.border = "2px solid red"
    uphone.focus();
    return false;
  }
}

//Defining method nationvalidation with parameter
function nationvalidation(unation) {
  if (unation.value == "Default") {
    alert("Please select your Nationality");
    unation.style.border = "2px solid red"
    unation.focus();
    return false;
  } else {
    unation.style.border = "2px solid white"
    return true;
  }
}

//Defining method ninvalidation with parameters
function ninvalidation(uid, mx, my) {
  //Accessing form element
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert("NIN should not be empty / length be between " + mx + " to " + my);
    uid.style.border = "2px solid red;"
    uid.focus();
    return false;
  }
  uid.style.border = "2px solid white;"
  return true;
}


