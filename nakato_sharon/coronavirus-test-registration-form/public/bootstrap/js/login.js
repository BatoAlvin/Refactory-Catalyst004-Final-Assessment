let loginValidation = ()=>{
    var uid = document.login.fname;
    var passid = document.login.password;
     /**Invoking functions with arguments */
     if (userid_validation(uid, 6, 25)) {
         if (passid_validation(passid,6,12)){
          alert("Form Succesfully Submitted");
          window.location.reload();
         }
     }
     return false
    }
    
      //Defining method userid_valiadtion with parameters
      function userid_validation(uid, mx, my) {
        //Accessing form element
        var uid_len = uid.value.length;
        if (uid_len == 0 || uid_len >= my || uid_len < mx) {
          alert(
            "Username should not be empty / length be between " + mx + " to " + my
          );
          uid.focus();
          return false;
        }
        return true;
      }
    
       //Defining method passid_valiadtion with parameters
       function passid_validation(passid, mx, my) {
        //Accessing form element
        var passid_len = passid.value.length;
        if (passid_len == 0 || passid_len >= my || passid_len < mx) {
          alert(
            "Password should not be empty / length be between " + mx + " to " + my
          );
          passid.focus();
          return false;
        }
        return true;
      }