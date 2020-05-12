// The validate function for the form
const validate = () => {
  const surname = document.getElementById('surname');
  const givenname = document.getElementById('givenname');
  const dateOfBirth = document.getElementById('dateOfBirth');
  const residence = document.getElementById('residence');
  const occupation = document.getElementById('occupation');
  const nationality = document.getElementById('nationality');
  const genders = document.getElementsByName('gender');
  const category = document.getElementById('category');

  if (validateSurname(surname)) {
    if (validateGivenName(givenname)) {
      if (validateDateOfBirth(dateOfBirth)) {
        if (validateResidence(residence)) {
          if (validateOccupation(occupation)) {
            if (validateNationality(nationality)) {
              if (validateCategory(category)) {
                return true;
              }
            }
          }
        }
      }
    }
  }
  return false;
};

// Validate the surname
const validateSurname = (surname) => {
  const value = surname.value;
  const errorTag = document.getElementById('surname_error');

  if (!value.match(/^[a-zA-Z ]*$/)) {
    surname.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The Surname should be only alphabets only';
    return false;
  } else if (value.length < 1 || value.length > 16) {
    surname.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The Surname should have between 1 and 16 alphabets';
    return false;
  } else {
    surname.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

// Validate the given name
const validateGivenName = (givenname) => {
  const value = givenname.value;
  const errorTag = document.getElementById('givenname_error');

  if (!value.match(/^[a-zA-Z ]*$/)) {
    givenname.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The Given Name should be only alphabets only';
    return false;
  } else if (value.length < 1 || value.length > 16) {
    givenname.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The Given Name should have between 1 and 16 alphabets';
    return false;
  } else {
    givenname.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

// Validate the date of Birth
const validateDateOfBirth = (dateOfBirth) => {
  const value = dateOfBirth.value;
  const errorTag = document.getElementById('dateOfBirth_error');

  if (value.length < 1) {
    dateOfBirth.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'A Date of Birth is required';
    return false;
  } else {
    let oneYearFromNow = new Date();
    let manyYearsFromNow = new Date();

    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 1);
    manyYearsFromNow.setFullYear(manyYearsFromNow.getFullYear() + 150);

    const time1 = new Date(oneYearFromNow).getTime();
    const time2 = new Date(manyYearsFromNow).getFullYear();
    const time3 = new Date(value).getTime();

    if (time3 > time1 && time3 > time2) {
      dateOfBirth.style.border = '1px solid red';
      errorTag.style.color = 'red';
      errorTag.innerHTML = 'Patient should be at least One year old and at most 150 years old';
      return false;
    } else {
      dateOfBirth.style.border = '1px solid green';
      errorTag.innerHTML = '';
      return true;
    }
  }
};

// Validate the residence
const validateResidence = (residence) => {
  const value = residence.value;
  const errorTag = document.getElementById('residence_error');

  if (!value.match(/^[a-zA-Z ]*$/)) {
    residence.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The residence should be in alphabets only';
    return false;
  } else if (value.length < 5 || value.length > 20) {
    residence.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The Residence given should have between 1 and 16 alphabets';
    return false;
  } else {
    residence.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

// Validate the occupation
const validateOccupation = (occupation) => {
  const value = occupation.value;
  const errorTag = document.getElementById('occupation_error');

  if (!value.match(/^[a-zA-Z ]*$/)) {
    occupation.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The occupation should be in alphabets only';
    return false;
  } else if (value.length < 5 || value.length > 50) {
    occupation.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The occupation given should have between 5 and 50 alphabets';
    return false;
  } else {
    occupation.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

// Validate the nationality
const validateNationality = (nationality) => {
  const value = nationality.value;
  const errorTag = document.getElementById('nationality_error');

  if (!value.match(/^[a-zA-Z ]*$/)) {
    nationality.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The nationality should be in alphabets only';
    return false;
  } else if (value.length < 5 || value.length > 20) {
    nationality.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'The nationality given should have between 5 and 20 alphabets';
    return false;
  } else {
    nationality.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

// Validate the gender
const validateGender = (gender) => {};

// Validate the category
const validateCategory = (category) => {
  const value = category.value;
  const errorTag = document.getElementById('catergory_error');

  if (value === 'none') {
    category.style.border = '1px solid red';
    errorTag.style.color = 'red';
    errorTag.innerHTML = 'Kindly select a category first';
    return false;
  } else {
    category.style.border = '1px solid green';
    errorTag.innerHTML = '';
    return true;
  }
};

const invalidateInputs = () => {
  const inputs = document.getElementsByTagName('input');
  inputs.forEach((input) => {
    input.style.border = '1px solid red';
  });
};

const form = document.getElementById('myform');
form.addEventListener('submit', (event) => {
  // event.preventDefault();
  if (validate()) {
    console.log('successful validation');
  } else {
    console.log('error validating');
    // invalidateInputs();
    event.preventDefault();
  }
});
