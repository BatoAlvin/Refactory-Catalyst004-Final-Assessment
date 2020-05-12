formValidation = () => {
    
    // STORE ELEMENTS
    var surName = document.registrationForm.surName;
    var givenName = document.registrationForm.givenName;
    var dob = document.registrationForm.dob;
    var residence = document.registrationForm.residence;
    var occupation = document.registrationForm.occupation;
    var nationality = document.registrationForm.nationality;
    var category = document.registrationForm.category;

    // RESET BORDERS
    surName.style.border = "1px solid lightgrey"
    givenName.style.border = "1px solid lightgrey"
    dob.style.border = "1px solid lightgrey"
    residence.style.border = "1px solid lightgrey"
    occupation.style.border = "1px solid lightgrey"
    nationality.style.border = "1px solid lightgrey"
    category.style.border = "1px solid lightgrey"

    // RESET ERROR MESSAGES
    document.getElementById('surName-error').style.display = "none"
    document.getElementById('givenName-error').style.display = "none"
    document.getElementById('dob-error').style.display = "none"
    document.getElementById('residence-error').style.display = "none"
    document.getElementById('occupation-error').style.display = "none"
    document.getElementById('nationality-error').style.display = "none"
    document.getElementById('category-error').style.display = "none"

    // OBJECT TO STORE VALIDATIONS
    const validations = {
        surName: 0,
        givenName: 0,
        dob: 0,
        residence: 0,
        occupation: 0,
        nationality: 0,
        category: 0
    };

    // RUN VALIDATIONS
    validations.surName = surName_validation(surName, 1, 16);
    validations.givenName = givenName_validation(givenName, 1, 16);
    validations.dob = dob_validation(dob, 1, 150);
    validations.residence = residence_validation(residence, 1, 20);
    validations.occupation = occupation_validation(occupation, 5, 50);
    validations.nationality = nationality_validation(nationality, 5, 20);
    validations.category = category_validation(category);

    // CONVERT TO ARRAY
    const values = Object.values(validations)

    // EXAMINE ARRAY
    var form_validity = 0
    for(i=0; i<7; i++) {
        if (values[i] === 1){
            form_validity++
        } 
    }

    // ASSESS COMPLETION
    if (form_validity !== 7) {
        // Pause form execution if all fields are not validated in the object literal above
        event.preventDefault();
    } else {
        // On success auto generate username and relay it to Admin then resume execution
        alert("You have successfully completed validation");
        // console.log(generated_username)
        event.currentTarget.submit();
        return true;
    }
    
    return true;
}

surName_validation = (surName, min, max) => {
    var letters = /^[A-Za-z]+$/;
    if(surName.value.length <= min || surName.value.length >= max || !surName.value.match(letters)){
        surName.style.border = "2px solid red"
        document.getElementById('surName-error').style.display = "block"
        return 0;
    }
    else{ 
        surName.style.border = "1px solid green"
        return 1;
     }
}

givenName_validation = (givenName, min, max) => {
    var letters = /^[A-Za-z]+$/;
    if(givenName.value.length <= min || givenName.value.length >= max || !givenName.value.match(letters)){
        givenName.style.border = "2px solid red"
        document.getElementById('givenName-error').style.display = "block"
        givenName.focus()
        return 0;
    }
    else{ 
        givenName.style.border = "2px solid green"
        return 1;
     }
}

dob_validation = (dob, min, max) => {
    if(dob.value === ""){
        dob.style.border = "2px solid red"
        document.getElementById('dob-error').style.display = "block";
        return 0
    } else {
        const min_age_of_adult = min;
        const max_age_of_adult = max;
        var dob_value = dob.value;
        var patient_dob = new Date(dob_value).getTime();
        var date_today = new Date();
        var date_1yr_ago = date_today.setFullYear(date_today.getFullYear() - min_age_of_adult);

        if(patient_dob < date_1yr_ago) {
            dob.style.border = "2px solid green"
            return 1;
        } else {
            dob.style.border = "2px solid red"
            document.getElementById('dob-error').style.display = "block";
            return 0;
        }
    }
}

residence_validation = (residence, min, max) => {
    var letters = /^[A-Za-z]+$/;
   if(residence.value.length <= min || residence.value.length >= max || !residence.value.match(letters)){
        residence.style.border = "2px solid red"
        document.getElementById('residence-error').style.display = "block"
        residence.focus()
        return 0;
    }
    else{ 
        residence.style.border = "2px solid green"
        return 1;
     }
}

occupation_validation = (occupation, min, max) => {
    var letters = /^[A-Za-z]+$/;
    if(occupation.value.length <= min || occupation.value.length >= max || !occupation.value.match(letters)){
        occupation.style.border = "2px solid red";
        document.getElementById('occupation-error').style.display = "block";
        return 0;
    }
    else{ 
        occupation.style.border = "2px solid green";
        return 1;
    }
}

nationality_validation = (nationality, min, max) => {
    var letters = /^[A-Za-z]+$/;
    if(nationality.value.length <= min || nationality.value.length >= max || !nationality.value.match(letters)){
        nationality.style.border = "2px solid red"
        document.getElementById('nationality-error').style.display = "block"
        nationality.focus()
        return 0;
    }
    else{ 
        nationality.style.border = "2px solid green"
        return 1;
     }
}

category_validation = (category) => {
    if (category.value == "Default") {
        category.style.border = "2px solid red"
        document.getElementById('category-error').style.display = "block";
        return 0;
    }
    else {
        category.style.border = "1px solid green"
        return 1;
    }
}