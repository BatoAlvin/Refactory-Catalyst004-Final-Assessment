document.querySelector("form").addEventListener("submit", (e)  =>{
    e.preventDefault();
  
      // validating name
      const name = document.getElementById("name");
      const Regex = /^[A-Za-(1-16)\s]+$/;
  
      if(!Regex.test(name.value)){
          document.getElementById("error1").innerHTML = "Name Required";
          name.style.border = "1px solid red";
      }else{
          document.getElementById("error1").innerHTML = "";
          name.style.border = "1px solid green";
      }

      // validating  of date of birth
      const dob=document.getElementById("dob");
      if((dob ==="")){
        document.getElementById("error2").innerHTML="Select Date from the right side pen"
        date.style.border="1px solid red"
      }else{
        document.getElementById("error2").innerHTML=""
        date.style.border="1px solid green"
  
      }

       // validating Place of residence
    const place = document.getElementById("place");
    const Regex = /^[A-Za-z(0-20)\s]+$/;

    if(!Regex.test(place.value)){
        document.getElementById("error3").innerHTML = "Name Required";
        place.style.border = "1px solid red";
    }else{
        document.getElementById("error3").innerHTML = "";
        place.style.border = "1px solid green";
    }

    // validating Occuaption
    const occup=document.getElementById("occup");
      if((occup ==="")){
        document.getElementById("error4").innerHTML="Select Date from the right side pen"
        occup.style.border="1px solid red"
      }else{
        document.getElementById("error4").innerHTML=""
        occup.style.border="1px solid green"
  
      }

    // validating natioanlity
    const nin = document.getElementById("nin");
    const Regex = /^[A-Za-z(0-20)\s]+$/;

    if(!Regex.test(nin.value)){
        document.getElementById("error5").innerHTML = "Name Required";
        nin.style.border = "1px solid red";
    }else{
        document.getElementById("error5").innerHTML = "";
        nin.style.border = "1px solid green";
    }

  
      // gender
      const first =document.getElementById("sex");
      const second =document.getElementById("sex");
      if ((first.checked=="")&&(second.checked=="")){
          document.getElementById("error6").innerHTML="Reguired"
      }else{
          document.getElementById("error6").innerHTML=""
  
      }

    //   Validating the type of patient
    const type =document.getElementById("select");
      if ((first.checked=="")&&(second.checked=="")){
          document.getElementById("error7").innerHTML="Reguired"
      }else{
          document.getElementById("error7").innerHTML=""
  
      }


   
     
})
