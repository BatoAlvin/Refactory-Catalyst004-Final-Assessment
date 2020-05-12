
const myform = document.getElementById("patientForm");
function formSubmitted (event){
    event.preventDefault();

    //validate surname and given name
    let surname = document.getElementById('surname');
    let given = document.getElementById('givenName');
    let surError = document.getElementById("surError");
    let givenError = document.getElementById('givenError');
    var letters = /^[A-Za-z]+$/;

    if (
        surname.value === "" ||
        !surname.value.match(letters) ||
        surname.value.length <= 1 ||
        surname.value.length >= 16 ||
        surname.value.includes("@")
    ){
        surError.innerHTML = "<span style='color: red;'>This field is required</span>"; 
        surname.focus();
        return false;
    } else {
        surError.innerHTML = "";
    }

    if (
        given.value === "" ||
        !given.value.match(letters) ||
        given.value.length <= 1 ||
        given.value.length >= 16 ||
        given.value.includes("@")
    ){
        givenError.innerHTML = "<span style='color: red;'>This field is required</span>"; 
        given.focus();
        return false;
    } else {
        givenError.innerHTML = "";
    }

    //validate date of birth
    // let dob = document.getElementById('dateofBirth');
    // let dobError = document.getElementById("dobError");
    // var date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    
    //validate place of residence
    let residence = document.getElementById('residence');
    let residenceError = document.getElementById('residenceError');
    
    if (
        residence.value === "" ||
        !residence.value.match(letters) ||
        residence.value.length <= 1 ||
        residence.value.length >= 20 ||
        residence.value.includes("@")
    ){
        residenceError.innerHTML = "<span style='color: red;'>This field is required</span>"; 
        residence.focus();
        return false;
    } else {
        residenceError.innerHTML = "";
    }

    //validate occupation
    let occupation = document.getElementById('occupation');
    let occupationError = document.getElementById('occupationError');
    
    if (
        occupation.value === "" ||
        !occupation.value.match(letters) ||
        occupation.value.length <= 5 ||
        occupation.value.length >= 50 ||
        occupation.value.includes("@")
    ){
        occupationError.innerHTML = "<span style='color: red;'>This field is required</span>"; 
        occupation.focus();
        return false;
    } else {
        occupationError.innerHTML = "";
    }

    //validate nationality
    let nationality = document.getElementById('nationality');
    let nationalityError = document.getElementById('nationalityError');
    
    if (
        nationality.value === "" ||
        !nationality.value.match(letters) ||
        nationality.value.length <= 5 ||
        nationality.value.length >= 20 ||
        nationality.value.includes("@")
    ){
        nationalityError.innerHTML = "<span style='color: red;'>This field is required</span>"; 
        nationality.focus();
        return false;
    } else {
        nationalityError.innerHTML = "";
    }

    //validate category
    let category = document.getElementById('category');
    let categoryError = document.getElementById('categoryError');
    if(category.value == "default") {
        categoryError.innerHTML = "<span style='color: red;'>Select Patient Category</span>";
        category.focus();
        return false;
    } else {
        categoryError.innerHTML = "";
    }
    alert('Form Succesfully Submitted');
  window.location.reload()
  return true;

}


patientForm.addEventListener("submit", formSubmitted);