let handlesubmit =(event) =>{

    event.preventDefault();
  
    var surname = document.getElementById("surnameid");
    var givenname = document.getElementById("givennameid");
    var dateofbirth = document.getElementById("dobid");
    var residence = document.getElementById("residenceid");
    var occupation = document.getElementById("occupationid");
    var nationality = document.getElementById("nationalityid");
   

    function surnamevalid () {
          if(surname.value.match(/^[A-Za-z]+$/)){
            return true;}
          };
          if(!surnamevalid()){alert("This field is required");
        return false;
        };
     function givennamevalid () {
            if(givenname.value.match(/^[A-Za-z]+$/)){
              return true;}
            };
            if(!givennamevalid()){alert("This field is required");
          return false;
          };
     function dateofbirthvalid () {
            if(dateofbirth.value.match(/^[0-9]+$/)){
              return true;}
            };
            if(!dateofbirthvalid()){alert("Select Date of Birth");
          return false;
          };
    function residencevalid () {
            if(residence.value.match(/^[A-Za-z]+$/)){
              return true;}
            };
            if(!residencevalid()){alert("This field is required");
          return false;
          };
     function occupationvalid () {
            if(occupation.value.match(/^[A-Za-z]+$/)){
              return true;}
            };
            if(!occupationvalid()){alert("This field is required");
          return false;
          };
    function nationalityvalid () {
            if(nationality.value.match(/^[A-Za-z]+$/)){
              return true;}
            };
            if(!nationalityvalid()){alert("This field is required");
          return false;
          };
        
 alert("registration was successful")
};

