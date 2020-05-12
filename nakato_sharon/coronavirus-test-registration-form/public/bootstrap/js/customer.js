function formvalidation() {
    var uid = document.customerform.fname;
    var uidd = document.customerform.lastName;
    var uphone = document.customerform.phonenumber;
    var unation = document.customerform.origin;
    var uninn = document.customerform.nin;
    var ucar = document.customerform.vehicle;
    var uref = document.customerform.refname;
    var ureff = document.customerform.refnumber;
    var uwork = document.customerform.refoccupation;
    var upay = document.customerform.downpayment;
    var ustage = document.customerform.stagename;
    var umoney = document.customerform.loans;
    var ucustomer = document.customerform.id
    // var udate = document.customerform.confirm;
    
  
    /**Invoking functions with arguments */
    if (fullnamevalidation(uid)) {
        if (lastnamevalidation(uidd)) {
      if (phonevalidation(uphone)) {
        if (nationvalidation(unation)) {
          if (ninvalidation(uninn)) {
            if (carvalidation(ucar)) {
              if (refvalidation(uref)) {
                if (refnovalidation(ureff)) {
                  if (refocvalidation(uwork)) {
                    if (upayvalidation(upay, 6, 7)) {
                      if (ustagevalidation(ustage)) {
                          if (loanvalidation(umoney, 5, 6)) {
                            alert("Form Succesfully Submitted");
                            window.location.reload();
                            // if (checkvalidation(udate)) {
                              
                            // }
                          }
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    }
    return false;
  }
  
  //Defining method fullnamevalidation with parameter
  function firstnamevalidation(uidd) {
    var letters = /^[A-Za-z]+$/;
    if (uid.value.match(letters)) {
      uid.style.border = '2px solid white';
      return true;
    } else {
      alert("Full names must have alphabet characters only");
      uid.style.border = '2px solid red';
      uid.focus();
      return false;
    }
  }
  
   //Defining method fullnamevalidation with parameter
   function lastnamevalidation(uid) {
    var letters = /^[A-Za-z]+$/;
    if (uidd.value.match(letters)) {
      uidd.style.border = '2px solid white';
      return true;
    } else {
      alert("Full names must have alphabet characters only");
      uidd.style.border = '2px solid red';
      uidd.focus();
      return false;
    }
  }
  
  //Defining method phonevalidation with parameter
  function phonevalidation(uphone) {
    // var numbers = /^[0-9]+$/;
    var numbers = /^\d{10}$/;
    if (uphone.value.match(numbers)) {
      uphone.style.border = '2px solid white';
      return true;
    } else {
      alert("Telephone code must have 10 numeric characters only");
      uphone.style.border = '2px solid red';
      uphone.focus();
      return false;
    }
  }
  
  //Defining method nationvalidation with parameter
  function nationvalidation(unation) {
    if (unation.value == "Default") {
      alert("Please select your Nationality");
      unation.style.border = '2px solid red';
      unation.focus();
      return false;
    } else {
      unation.style.border = '2px solid white';
      return true;
    }
  }
  
  //Defining method ninvalidation
  function ninvalidation(uninn) {
    var letters = /^[0-9a-zA-Z]+$/;
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
  
  
  //Defining method carvalidation
  function carvalidation(ucar) {
    if (ucar.value == "Default") {
      alert("Please select your Vehicle");
      ucar.style.border = '2px solid red';
      ucar.focus();
      return false;
    } else {
      ucar.style.border = '2px solid white';
      return true;
    }
  }
  
  //Defining method refvalidation with parameter
  function refvalidation(uref) {
    var letterrs = /^[A-Za-z]+$/;
    if (uref.value.match(letterrs)) {
      uref.style.border = '2px solid white';
      return true;
    } else {
      alert("Refrees Names must have alphabet characters only");
      uref.style.border = '2px solid red';
      uref.focus();
      return false;
    }
  }
  
  //Defining method refnovalidation with parameter
  function refnovalidation(ureff) {
    // var numbers = /^[0-9]+$/;
    var numbers = /^\d{10}$/;
    if (ureff.value.match(numbers)) {
      ureff.style.border = '2px solid white';
      return true;
    } else {
      alert("Refrees phone number must have 10 digits");
      ureff.style.border = '2px solid red';
      ureff.focus();
      return false;
    }
  }
  
  //Defining method refocvalidation
  function refocvalidation(refoc) {
    var letters = /^[A-Za-z]+$/;
    if (refoc.value.match(letters)) {
      refoc.style.border = '2px solid white';
      return true;
    } else {
      alert("Refrees Occupation must have alphabet characters only");
      refoc.style.border = '2px solid red';
      refoc.focus();
      return false;
    }
  }
  
  //Defining method upayvaliadtion with parameters
  function upayvalidation(upay, mx, my) {
    //Accessing form element
    var upay_len = upay.value.length;
    if (upay_len == 850000 || upay_len >= my || upay_len < mx) {
      alert("Downpayment should not be less than 850000shs");
      upay.style.border = '2px solid red';
      upay.focus();
      return false;
    }
    upay.style.border = '2px solid white';
    return true;
  }
  
  //Defining method  ustagevalidation with parameter
  function ustagevalidation(ustage) {
    var letters = /^[A-Za-z]+$/;
    if (ustage.value.match(letters)) {
      ustage.style.border = '2px solid white';
      return true;
    } else {
      alert("Stage name must have alphabet characters only");
      ustage.style.border = '2px solid red';
      ustage.focus();
      return false;
    }
  }
  
  //Defining method loanvalidation
  function loanvalidation(umoney) {
    if (umoney.value == "Default") {
      alert("Please select your Loan Type");
      umoney.style.border = '2px solid red';
      umoney.focus();
      return false;
    } else {
      umoney.style.border = '2px solid white';
      return true;
    }
  }
  
  
  