//Defining a function salesSubmit with an argument event
let patientSubmit=()=>{
    //Accessing and storing DOM elements
    let firstName = document.getElementById('surname');
    let secondName = document.getElementById('givenname');
    let birthday = document.getElementById('birth');
    let home = document.getElementById('residence');
    let work = document.getElementById('job');
    let identification = document.getElementById('origin');
    
    //Checking whether validation rules are true or false
    if(name1(firstName)){
    if(name2(secondName)){
    // if(birthDay(birthday)){
    if(locality(home)){
    if(alphanumeric(work)){
    if(country(identification)){
        form.submit()
    }    
    }       
    }    
    // }
    }
    }
    return false;
    };

    function name1(alphabet){
        var letters = /^[A-Za-z]+$/;
        if(alphabet.value.match(letters)){
            return true;
        }
        else{
            surname.style.border = "2px solid red";
            document.getElementById('surname').style.color = "red";
            surname_error.textContent = "This feild is required";
            // alert("Please check the first name field and make sure you didn't leave it blank or used numbers before submition!");
            return false;
          }
    }

    function name2(alphabets){
        var letter = /^[A-Za-z]+$/;
        if(alphabets.value.match(letter)){
            return true;   
        }
        else{
            givenname.style.border = "2px solid red";
            document.getElementById('givenname').style.color = "red";
            givenname_error.textContent = "This feild is required";
            // alert("Please check the last name field and make sure you didnt leave it blank or used numbers before submition!");
            alphabets.focus();
            return false;

        }
    }

    // function birthDay(date) {
    //     var alphanumeric = /^[0-9A-Za-z]+$/;
    //     if(date.value.match(alphanumeric)){
    //         return true;
    //     }
    //     else{
    //         birth.style.border = "2px solid red";
    //         document.getElementById('birth').style.color = "red";
    //         dob_error.textContent = "This feild is required";
    //         alert("Please specify the sales Id number!");
    //         return false;
    //     }
    // }

    function locality(area){
        var household = /^[A-Za-z]+$/;
        if(area.value.match(household)){
            return true;   
        }
        else{
            residence.style.border = "2px solid red";
            document.getElementById('residence').style.color = "red";
            residence_error.textContent = "This feild is required";
            // alert("Please check the last name field and make sure you didnt leave it blank or used numbers before submition!");
            area.focus();
            return false;

        }
    }

    function alphanumeric(employed){
        var workFeild = /^[A-Za-z]+$/;
        if(employed.value.match(workFeild)){
            return true;   
        }
        else{
            job.style.border = "2px solid red";
            document.getElementById('job').style.color = "red";
            occupation_error.textContent = "This feild is required";
            // alert("Please check the last name field and make sure you didnt leave it blank or used numbers before submition!");
            employed.focus();
            return false;

        }
    }

    function country(nation){
        var countryOforigin = /^[A-Za-z]+$/;
        if(nation.value.match(countryOforigin)){
            alert('Successfully Submitted');
            window.location.reload()
            return true;   
        }
        else{
            origin.style.border = "2px solid red";
            document.getElementById('origin').style.color = "red";
            nationality_error.textContent = "This feild is required";
          
             nation.focus();
            return false;

        }
    }