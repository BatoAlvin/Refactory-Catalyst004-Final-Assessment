function registrationformValidation() {
    var uname = document.registration.fname;
    var ulast = document.registration.lastName;
    var uphone = document.registration.phoneNumber;
    var uemail = document.registration.email
    var upid = document.registration.password
    

  
    /**Invoking functions with arguments */
    if (firstnamevalidation(uname, 5, 14)) {
      if (lastnamevalidation(ulast)) {
            if (phonevalidation(uphone, 10)) {
              if (emailalidation(uemail)) {
                if (passidvalidation(passid,6,12)) {

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
      // uname.style.border = "2px solid red";
      uname.focus();
      return false;
    } else {
      // uname.style.border = "2px solid green";
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
      ulast.style.border = "2px solid green";
    }
    return true;
  }

  function phonevalidation(uphone) {
    var numbers = /^\d{10}$/;
    if (uphone.value.match(numbers)) {
      return true;
    } else {
      alert("Telephone code must have 10 numeric characters only");
      uphone.style.border = "2px solid red;";
      uphone.focus();
      return false;
    }
  }
  
    
  function emailvalidation(uemail, mx, my) {
    var uemail_len = uemail.value.length;
    if (uemail_len == 0 || uemail_len >= my || uemail_len < mx) {
      alert(
        "Email should not be empty / length be between " + mx + " to " + my
      );
      uemail.focus();
      return false;
    }
    return true;
  }

  function passidvalidation(upid, mx, my) {
    var upid_len = upid.value.length;
    if (upid_len == 0 || upid_len >= my || upid_len < mx) {
      alert(
        "Password should not be empty / length be between " + mx + " to " + my
      );
      upid.focus();
      return false;
    }
    return true;
  }
  
  
  