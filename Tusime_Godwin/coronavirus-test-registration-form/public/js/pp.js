const name = document.getElementById('surName')
const gname = document.getElementById('givenName')
const placeOfResidence = document.getElementById('placeOfResidence')
const occupation = document.getElementById('occupation')
const nationality = document.getElementById('nationality')
// const category = document.getElementById('category')
const dateOfBirth = document.getElementById('dateOfBirth')
const sbutton = document.getElementById('sbutton')

sbutton.addEventListener('click', (e) => {
    if (surName.value.length < 1 || surName.value.length > 15) {
        document.getElementById('p3').innerText = "This field is required";
        surName.style.border = '2px solid red'



    }
    if (givenName.value.length < 1 || givenName.value.length > 15) {
        document.getElementById('p4').innerText = "This field is required";
        givenName.style.border = '2px solid red'

    }
    if (placeOfResidence.value.length < 1 || placeOfResidence.value.length > 19) {
        document.getElementById('p6').innerText = "This field is required";
        placeOfResidence.style.border = '2px solid red'

    }

    if (occupation.value.length < 5 || occupation.value.length > 50) {
        document.getElementById('p7').innerText = "This field is required";
        occupation.style.border = '2px solid red'

    }
    if (nationality.value.length < 5 || nationality.value.length > 20) {
        document.getElementById('p8').innerText = "This field is required";
        nationality.style.border = '2px solid red'

    }
    // if (category.value.length =" ") {
    //     document.getElementById('p9').innerText = "Select patient category";
    //     category.style.border = '2px solid red'

    // }
    if (dateOfBirth.value.length < 1 || dateOfBirth.value.length > 15) {
        document.getElementById('p5').innerText = "Enter Date of Birth";
        dateOfBirth.style.border = '2px solid red'

    }
    else {
        e.preventDefault()
    }

}, false)