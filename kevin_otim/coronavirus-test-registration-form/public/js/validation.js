function formValidation(){
 let surname = document.myform.surname;
 let given_name = document.myform.given_name;
 let date_of_birth = document.myform.date_of_birth;
 let residence = document.myform.residence
 let occupation = document.myform.occupation;
 let nationality = document.myform.nationality;
 let category = document.myform.category;



 
 if(surnameCheck(surname)){
  if(givenNameCheck(given_name)){
   if(ageCheck(date_of_birth)){
    if(residenceCheck(residence)){
     if(occupationCheck(occupation)){
      if(nationalityCheck(nationality))
      if(categoryCheck(category)){
        return true
      }
     }
    }
   }
  }
 }
 return false
 }
 
 function surnameCheck(input){
  var letters = /^[A-Za-z]+$/;
  if(input.value.match(letters) && input.value.length > 1 && input.value.length <16){
   input.style.border='2px solid green'
   document.getElementById('para1').innerHTML =''
   return true
  }
  else{
   document.getElementById('para1').innerHTML = 'This Field is required'
   input.style.border='2px solid red'
   input.focus()
   return false
  }
 }

 function givenNameCheck(input){
  var letters = /^[A-Za-z]+$/;
  if(input.value.match(letters) && input.value.length > 1 && input.value.length <16){
   input.style.border='2px solid green'
   document.getElementById('para2').innerHTML =''
   return true
  }
  else{
   document.getElementById('para2').innerHTML = 'This Field is required'
   input.style.border='2px solid red'
   input.focus()
   return false
  }
 }
//Age calculation function
 function ageCheckCalculator(dob) {
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

function ageCheck(input){
  //instantiating an object
  let ageObject = new ageCheckCalculator(input.value);
  let age = ageObject.calculateAge();
if(age < 1 || age > 150 || input.value == ''){
document.getElementById('para10').innerHTML = `Select Date Of Birth`
input.style.border='2px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('para10').innerHTML = ``
  input.style.border='2px solid green'
return true;
}
}

function residenceCheck(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters) && input.value.length > 1 && input.value.length <20){
  input.style.border='2px solid green'
  document.getElementById('para4').innerHTML =''
  return true
 }
 else{
  document.getElementById('para4').innerHTML = 'This Field is required'
  input.style.border='2px solid red'
  input.focus()
  return false
 }
}

function occupationCheck(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters) && input.value.length > 5 && input.value.length <50){
  input.style.border='2px solid green'
  document.getElementById('para5').innerHTML =''
  return true
 }
 else{
  document.getElementById('para5').innerHTML = 'This Field is required'
  input.style.border='2px solid red'
  input.focus()
  return false
 }
}

function nationalityCheck(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters) && input.value.length > 5 && input.value.length <20){
  input.style.border='2px solid green'
  document.getElementById('para6').innerHTML =''
  return true
 }
 else{
  document.getElementById('para6').innerHTML = 'This Field is required'
  input.style.border='2px solid red'
  input.focus()
  return false
 }
}

function categoryCheck(input)
{
if(input.value == "Default")
{
document.getElementById('para7').innerHTML = 'Select Patient Category'
input.style.border='2px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('para7').innerHTML = ''
  input.style.border='2px solid green'
return true;
}
}

