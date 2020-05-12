class loginHTTP {
  async postHttp(url, data) {
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }
}

const http = new loginHTTP();

function validateSurName() {
  const surName = document.getElementById("surName").value;
  const regEx = /^[A-Za-z]{1,16}$/;
  if (regEx.test(surName)) {
    document.getElementById("surname").classList.add("d-none");
    document.getElementById("surName").classList.remove("border");
    document.getElementById("surName").classList.remove("border-danger");
    return true;
  }
  document.getElementById("surname").classList.remove("d-none");
  document.getElementById("surName").classList.add("border");
  document.getElementById("surName").classList.add("border-danger");
  return false;
}

function validateGivenName() {
  const givenName = document.getElementById("givenName").value;
  const regEx = /^[A-Za-z_]{1,16}$/;
  if (regEx.test(givenName)) {
    document.getElementById("givenname").classList.add("d-none");
    document.getElementById("givenName").classList.remove("border");
    document.getElementById("givenName").classList.remove("border-danger");
    return true;
  }
  document.getElementById("givenname").classList.remove("d-none");
  document.getElementById("givenName").classList.add("border");
  document.getElementById("givenName").classList.add("border-danger");
  return false;
}
function validatedateOfBirth() {
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const regEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (dateOfBirth !== null) {
    document.getElementById("dateOfBirth-covid").classList.add("d-none");
    document.getElementById("dateOfBirth").classList.remove("border");
    document.getElementById("dateOfBirth").classList.remove("border-danger");
    return true;
  }
  document.getElementById("dateOfBirth-covid").classList.remove("d-none");
  document.getElementById("dateOfBirth").classList.add("border");
  document.getElementById("dateOfBirth").classList.add("border-danger");
  return false;
}
function validateResidence() {
  const residence = document.getElementById("residence").value;
  const regEx = /^[a-zA-Z_ ]{1,16}$/;
  if (regEx.test(residence)) {
    document.getElementById("residence-covid").classList.add("d-none");
    document.getElementById("residence").classList.remove("border");
    document.getElementById("residence").classList.remove("border-danger");
    return true;
  }
  document.getElementById("residence-covid").classList.remove("d-none");
  document.getElementById("residence").classList.add("border");
  document.getElementById("residence").classList.add("border-danger");
  return false;
}
function validateOccupation() {
  const occupation = document.getElementById("occupation").value;
  const regEx = /^[A-Za-z_]{1,16}$/;
  if (regEx.test(occupation)) {
    document.getElementById("occupation-covid").classList.add("d-none");
    document.getElementById("occupation").classList.remove("border");
    document.getElementById("occupation").classList.remove("border-danger");
    return true;
  }
  document.getElementById("occupation-covid").classList.remove("d-none");
  document.getElementById("occupation").classList.add("border");
  document.getElementById("occupation").classList.add("border-danger");
  return false;
}
function validateNationality() {
  const nationality = document.getElementById("nationality").value;
  const regEx = /^[A-Za-z]{1,16}$/;
  if (regEx.test(nationality)) {
    document.getElementById("nationality-covid").classList.add("d-none");
    document.getElementById("nationality").classList.remove("border");
    document.getElementById("nationality").classList.remove("border-danger");
    return true;
  }
  document.getElementById("nationality-covid").classList.remove("d-none");
  document.getElementById("nationality").classList.add("border");
  document.getElementById("nationality").classList.add("border-danger");
  //   alert('please enter nationality');
  return false;
}
function validateGender() {
  const gender = document.getElementById("gender").value;
  const regEx = /^male$|^female$/;
  if (regEx.test(gender)) {
    document.getElementById("gender-covid").classList.add("d-none");
    document.getElementById("gender").classList.remove("border");
    document.getElementById("gender").classList.remove("border-danger");
    return true;
  }
  document.getElementById("gender-covid").classList.remove("d-none");
  document.getElementById("gender").classList.add("border");
  document.getElementById("gender").classList.add("border-danger");
  return false;
}

function validateCategory() {
  const category = document.getElementById("category").value;
  if (category !== "default") {
    console.log("selected");
    document.getElementById("category-covid").classList.add("d-none");
    document.getElementById("category").classList.remove("border");
    document.getElementById("category").classList.remove("border-danger");
    return true;
  }
  document.getElementById("category-covid").classList.remove("d-none");
  document.getElementById("category").classList.add("border");
  document.getElementById("category").classList.add("border-danger");
  return false;
}

function handleSubmit() {
  const surNameValidationResult = validateSurName();
  const givenNameValidationResult = validateGivenName();
  const dateOfBirthValidationResult = validatedateOfBirth();
  const residencevalidationResult = validateResidence();
  const occupationValidationResult = validateOccupation();
  const nationalityValidationResult = validateNationality();
  const genderValidationResult = validateGender();
  const categoryValidationResult = validateCategory();
  if (
    surNameValidationResult &&
    givenNameValidationResult &&
    dateOfBirthValidationResult &&
    residencevalidationResult &&
    occupationValidationResult &&
    nationalityValidationResult &&
    genderValidationResult &&
    categoryValidationResult
  ) {
    register();
  }
}

function register() {
  surName = document.getElementById("surName").value;
  givenName = document.getElementById("givenName").value;
  dateOfBirth = document.getElementById("dateOfBirth").value;
  residence = document.getElementById("residence").value;
  occupation = document.getElementById("occupation").value;
  nationality = document.getElementById("nationality").value;
  gender = document.querySelector('input[name="Gender"]:checked').value;
  category = document.querySelector("#category").value;

  const data = {
    surName,
    givenName,
    dateOfBirth,
    residence,
    occupation,
    nationality,
    gender,
    category,
  };

  http
    .postHttp("http://localhost:3000/api/register", data)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}
