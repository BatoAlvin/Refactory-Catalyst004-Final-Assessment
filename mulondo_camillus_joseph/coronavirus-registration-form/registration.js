const form = document.getElementById("form");
const surname = document.getElementById("surname");
const givenName = document.getElementById("otherName");
const dateOfBirth = document.getElementById("dateOfBirth");
const home = document.getElementById("residense");
const occupation = document.getElementById("work");
const catergory = document.getElementById("type");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const surnameValue = surname.value.trim();
  const givenName = givenName.value.trim();
  const dateOfBirth = dateOfBirth.value.trim();
  const home = home.value.trim();
  const occupation = occupation.value.trim();
  const catergory = catergory.value.trim();

  if (surnameValue === "") {
    //   show error
    // add error class
    setErrorFor(surname, "please insert surname");
  }
  //   add success class
  else setSuccessFor(surname);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  //    adding the error message
  small.innerText = message;

  // adding the error class
  formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form control success'

}
