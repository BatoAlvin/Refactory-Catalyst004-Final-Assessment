function salevalidation() {
    var uname = document.salesReg.ffname;
    var pasid = document.salesReg.passwordd;
    var uphone = document.salesReg.phonenumber;
    var umail = document.salesReg.emaill;
    var uninn = document.salesReg.ninn;
    var dday = document.salesReg.workingdays;
    
    
  
    /**Invoking functions with arguments */
    if (firstnamevalidation(uname, 5,14)) {
      if (pasidvalidation(pasid, 6,12)) {
            if (phonevalidation(uphone, 10)) {
              if (mailvalidation(umail,)) {
                if (ninvalidation(uninn)) {
                  if (allnumeric(dday)){  
                    alert("Form Succesfully Submitted");
            window.location.reload(Get);
                  }
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
  
  function pasidvalidation(pasid, mx, my) {
    var pasid_len = pasid.value.length;
    if (pasid_len == 0 || pasid_len >= my || pasid_len < mx) {
      alert(
        "Password should not be empty / length be between " + mx + " to " + my
      );
      pasid.style.border = "2px solid red";
      pasid.focus();
      return false;
    }
    pasid.style.border = "2px solid white";
    return true;
  }
  
  
  //Defining method phonevalidation with parameter
  function phonevalidation(uphone) {
    // var numbers = /^[0-9]+$/;
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
  
  function mailvalidation(umail) {
    var umailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (umail.value.match(umailformat)) {
      return true;
    } else {
      alert("You must enter a valid email address!");
      umail.focus();
      return false;
    }
  }

  //Defining method ninvalidation
function ninvalidation(uninn) {
  var letters = /^[a-zA-Z\s]{3}[0-9]{10}$/;
  if (uninn.value.match(letters)) {
    uninn.style.border = '2px solid white';
    return true;
  } else {
    alert("NIN must have alphanumeric characters only");
    uninn.style.border = '2px solid red';
    uninn.focus();
    return false;
  }
}
  
   //Defining method allnumeric 
function allnumeric(dday) {
  var numbers = /^[0-9]+$/;
  if (dday.value.match(numbers)) {
    return true;
  } else {
    alert("Working Days must have numeric characters only");
    dday.focus();
    return false;
  }
}
  
  
  
  
  