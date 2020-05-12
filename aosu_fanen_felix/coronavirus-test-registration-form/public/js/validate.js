function formRegistration() {
    var firstName = document.registration.fname;
    var surname = document.registration.sname;
    var address = document.registration.add
    var phoneNo = document.registration.phn
    var syntoms = document.registration.synt
    var date = document.registration.dt
    var remarks = document.registration.rmks


    if (validatefirstName(firstName)) {
        if (validatesurname(surname)) {
            if (validateaddress(address)) {
                if (validatephoneNo(phoneNo)) {
                    if (validatesyntoms(syntoms)) {
                        if (validatedate(date)) {
                            if (validateremarks(remarks)) {

                            }

                        }

                    }

                }

            }
        }
    }
    return false;
}

//Validate First Name
function validatefirstName(firstName) {
    var letters = /^[A-Za-z]+$/;
    if (firstName.value.match(letters)) {
        return true;
    }
    else {

        document.getElementById('firstName_div').style.color = "red";
        firstName_error.textContent = "First Name is required";
        firstName.focus();

        return false;
    }
}

//Validate Last Name
function validatesurname(surname) {
    var letters = /^[A-Za-z]+$/;
    if (surname.value.match(letters)) {
        return true;
    }
    else {

        document.getElementById('surName_div').style.color = "red";
        surName_error.textContent = "Sur Name is required";
        surname.focus();

        return false;
    }
}

//Validate Patient Address
function validateaddress(address) {
    var letters = /^[A-Za-z0-9]+$/;
    if (address.value.match(letters)) {
        return true;
    }
    else {

        document.getElementById('contAddress_div').style.color = "red";
        contAddress_error.textContent = "Address is required";
        address.focus();

        return false;
    }
}

//Validate phone contact
function validatephoneNo(phoneNo) {
    var numbers = /^[0-9]+$/;
    if (phoneNo.value.match(numbers)) {
        return true;
    }
    else {

        document.getElementById('phoneNo_div').style.color = "red";
        phoneNo_error.textContent = "Phone Number is required";
        phoneNo.focus();

        return false;
    }
}

//Validate Patient syntoms
function validatesyntoms(syntoms) {
    var letters = /^[A-Za-z]+$/;
    if (syntoms.value.match(letters)) {
        return true;
    }
    else {

        document.getElementById('syntoms_div').style.color = "red";
        syntoms_error.textContent = "Syntoms is required";
        syntoms.focus();

        return false;
    }
}

//Validate current date
function validatedate(date) {
    if (date.value != "") {

        return true;
    }
    else {


        document.getElementById('date_div').style.color = "red";
        date_error.textContent = "Date of birth is required";
        date.focus();

        return false;

    }
}

//Validate patient's remarks
function validateremarks(remarks) {
    var letters = /^[A-Za-z]+$/;
    if (remarks.value.match(letters)) {
        alert('Form Succesfully Submitted');
        return true;
    }
    else {

        document.getElementById('remarks_div').style.color = "red";
        remarks_error.textContent = "Remarks is required";
        remarks.focus();

        return false;
    }
}
