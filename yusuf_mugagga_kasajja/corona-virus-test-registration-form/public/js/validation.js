function patient_validation(){
    //console.log("running validator");
    
    //event.preventDefault()

var surName = document.patients_form.surname
var givenName = document.patients_form.givenname
var doB = document.patients_form.dob
var residence = document.patients_form.residence
var occupation = document.patients_form.occupation
var nationality = document.patients_form.nationality
var category = document.patients_form.category

if (surname_validation(surName,1,16)) {}
if (givenname_validation(givenName,1,16)){}
if (dob_validation(doB,12,14)){}
if (residence_validation(residence,1,20)){}
if (occupation_validation(occupation,5,50)){}
if (nationality_validation(nationality,5,20)){}
if (category_validation(category,)){}
return true;
}


function surname_validation(surName,mx,my){
    var letters = /^[A-Za-z]+$/;
    if(surName.value.length <=mx || surName.value.length >=my || !surName.value.match(letters)){
        surName.style.border = "2px solid red"
        document.getElementById('error1').style.display = "none"
        document.getElementById('error1').style.display = "block"
        surName.focus()
        return false
    }
    else{ 
        surName.style.border = "2px solid green"
        document.getElementById('error1').style.display = "none"
        return true
     }
}

function givenname_validation(givenName,mx,my){
    var letters = /^[A-Za-z]+$/;
    if(givenName.value.length <=mx || givenName.value.length >=my || !givenName.value.match(letters)){
        givenName.style.border = "2px solid red"
        document.getElementById('error2').style.display = "none"
        document.getElementById('error2').style.display = "block"
        givenName.focus()
        return false
    }
    else{ 
        givenName.style.border = "2px solid green"
        document.getElementById('error2').style.display = "none"
        return true
     }
}

function dob_validation(doB,mx,my){
    if(doB.value == 0){
        doB.style.border = "2px solid red"
        document.getElementById('error3').style.display = "block"
        doB.focus()
        return false
    }
    else if(doB.value.length <mx||doB.value.length >my){
        doB.style.border = "2px solid red"
        document.getElementById('error3').style.display = "none"
        document.getElementById('error3').style.display = "block"
        doB.focus()
        return false
    }
    else{ 
        doB.style.border = "2px solid green"
        document.getElementById('error3').style.display = "none"
        return true
     }
}

function residence_validation(residence,mx,my){
    if(residence.value.length === 0){
        residence.style.border = "2px solid red"
        document.getElementById('error4').style.display = "block"
        residence.focus()
        return false
    }
    else if(residence.value.length <mx||residence.value.length >my){
        residence.style.border = "2px solid red"
        document.getElementById('error4').style.display = "none"
        document.getElementById('error4').style.display = "block"
        residence.focus()
        return false
    }
    else{ 
        residence.style.border = "2px solid green"
        document.getElementById('error4').style.display = "none"
        return true
     }
}

function occupation_validation(occupation,mx,my){
    if(occupation.value.length === 0){
        occupation.style.border = "2px solid red"
        document.getElementById('error5').style.display = "block"
        occupation.focus()
        return false
    }
    else if(occupation.value.length <mx||occupation.value.length >my){
        occupation.style.border = "2px solid red"
        document.getElementById('error5').style.display = "none"
        document.getElementById('error5').style.display = "block"
        occupation.focus()
        return false
    }
    else{ 
        occupation.style.border = "2px solid green"
        document.getElementById('error5').style.display = "none"
        return true
     }
}

function nationality_validation(nationality){
    if(nationality.value.length === 0){
        nationality.style.border = "2px solid red"
        document.getElementById('error6').style.display = "block"
        nationality.focus()
        return false
    }
    else if(nationality.value.length <mx||nationality.value.length >my){
        nationality.style.border = "2px solid red"
        document.getElementById('error6').style.display = "none"
        document.getElementById('error6').style.display = "block"
        nationality.focus()
        return false
    }
    else{ 
        nationality.style.border = "2px solid green"
        document.getElementById('error6').style.display = "none"
        return true
     }
}

function category_validation(category,mx,my){
    if(category.value == 0){
        category.style.border = "2px solid red"
        document.getElementById('error7').style.display = "block"
        category.focus()
        return false
    }
    else if(category.value.length <mx||category.value.length >my){
        category.style.border = "2px solid red"
        document.getElementById('error7').style.display = "none"
        document.getElementById('error7').style.display = "block"
        category.focus()
        return false
    }
    else{ 
        category.style.border = "2px solid green"
        document.getElementById('error7').style.display = "none"
        return true
     }
}