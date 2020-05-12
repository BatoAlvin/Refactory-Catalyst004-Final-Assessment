//Defining  a validatingg method
function validating() {
 
    function uid(min, max) {
        if (surName.value.length == 0 || surName.value.length < min || surName.value.length > max) {
            document.getElementById('p3').innerText = "This field is required";
            surName.style.border = '2px solid red'
            return false
        } else {
            surName.style.border = '2px solid green'
            return true
        }
    }

    function givenName(min, max) {
        if (givenname.value.length == 0 || givenName.value.length < min || givenname.value.length > max) {
            document.getElementById('p4').innerText = "This field is required";
            givenname.style.border = '2px solid red'
            return false
        } else {
            givenname.style.border = '2px solid green'
            return true
        }
    }
    function placeofResidence(min, max) {
        if (placeOfResidence.value.length == 0 || placeOfResidence.value.length < min || placeOfResidence.value.length > max) {
            document.getElementById('p6').innerText = "This field is required";
            placeOfResidence.style.border = '2px solid red'
            return false
        } else {
            placeOfResidence.style.border = '2px solid green'
            return true
        }
    }
    function occupations(min, max) {
        if (occupation.value.length == 0 || occupation.value.length < min || occupation.value.length > max) {
            document.getElementById('p7').innerText = "This field is required";
            occupation.style.border = '2px solid red'
            return false
        } else {
            occupation.style.border = '2px solid green'
            return true
        }
    }
    function nationalitie(min, max) {
        if (nationality.value.length == 0 || nationality.value.length < min || nationality.value.length > max) {
            document.getElementById('p8').innerText = "This field is required";
            nationality.style.border = '2px solid red'
            return false
        } else {
            nationality.style.border = '2px solid green'
            return true
        }
    }

    function categorie(min, max) {
        if (category.value.length == 0 || category.value.length < min || category.value.length > max) {
            document.getElementById('p9').innerText = "Select Patient category";
            category.style.border = '2px solid red'
            return false
        } else {
            category.style.border = '2px solid green'
            return true
        }
    }

    function dob(min, max) {
        if (dateOfBirth.value.length == 0 || dateOfBirth.value.length < min || dateOfBirth.value.length > max) {
            document.getElementById('p5').innerText = "Select Date of Birth";
            dateOfBirth.style.border = '2px solid red'
            return false
        } else {
            dateOfBirth.style.border = '2px solid green'
            return true
        }
    }
   


    if (uid(1, 15)) {
    }

    if (givenName(1, 15)) {
    }
    if (placeofResidence(1, 19)) {
    }
    if (occupations(5, 50)) {
    }
    if (nationalitie(5, 20)) {
    }
    if (dob(5, 20)) {
    }
    if (categorie(5, 20)) {
    }


}