registerValid = () => {
   // event.preventDefault()

   // fields to be validated
   var sname = document.forms["registerForm"]["surname"];
   var gname = document.forms["registerForm"]["givenName"];
   var dob = document.forms["registerForm"]["dob"];
   var residence = document.forms["registerForm"]["residence"];
   var occupation = document.forms["registerForm"]["occupation"];
   var nationality = document.forms["registerForm"]["nationality"];
   var category = document.forms["registerForm"]["category"];


   // nested function for validation
   if (FirstName(sname)) {
      if (Given(gname)) {
         if (DateBirth(dob)) {
            if (Reside(residence)) {
               if (Job(occupation)) {
                  if (Origin(nationality)) {
                     if (Group(gender)) {
                        return true
                     }
                  }
               }
            }
         }
      }
   }
   return false
}

// first name validation
FirstName = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters) && input.value.length > 1 && input.value.length < 16) {
      document.getElementById('is-valid1').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid1').innerHTML = 'First name must include letters only'
      input.style.border = '1px solid red'
      return false
   }
}

// given name validation
Given = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters) && input.value.length > 1 && input.value.length < 16) {
      document.getElementById('is-valid2').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid2').innerHTML = 'Given name must include letters only'
      input.style.border = '1px solid red'
      return false
   }
}

// date of birth
DateBirth = (input) => {
   let numbers = /^[#.0-9a-zA-Z\s,-]+$/
   if (input.value.match(numbers) && input.value.length > 1 && input.value.length < 150) {
      document.getElementById('is-valid3').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid3').innerHTML = 'Please fill in the date of birth'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}

// residence validation
Reside = (input) => {
   let letters = /^[#.0-9a-zA-Z\s,-]+$/;
   if (input.value.match(letters) && input.value.length > 1 && input.value.length < 20) {
      document.getElementById('is-valid4').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid4').innerHTML = 'Residential address must include numbers or letters'
      input.style.border = '1px solid red'
      input.focus()
      return false
   }
}

// occupation validation
Job = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters) && input.value.length > 5 && input.value.length < 50) {
      document.getElementById('is-valid5').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid5').innerHTML = 'Occupation is only alphabetic'
      input.style.border = '1px solid red'
      return false
   }
}

// nationality validation
Origin = (input) => {
   let letters = /^[A-Za-z]+$/;
   if (input.value.match(letters) && input.value.length > 5 && input.value.length < 20) {
      document.getElementById('is-valid6').innerHTML = ''
      input.style.border = '1px solid green'
      return true
   } else {
      document.getElementById('is-valid6').innerHTML = 'Nationality should include letters only'
      input.style.border = '1px solid red'
      return false
   }
}

// gender validation



// category validation
Group = (input) => {
   if (input.value === 'default') {
      document.getElementById('is-valid8').innerHTML = 'Please select a category from the list'
      input.style.border = '1px solid red'
      return false
   } else {
      document.getElementById('is-valid8').innerHTML = ''
      input.style.border = '1px solid green'
      input.focus()
      return true
   }
}



