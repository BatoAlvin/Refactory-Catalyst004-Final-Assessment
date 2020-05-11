document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const executiveName = document.getElementById("executive_name");
    const executiveNameRegex = /^[A-Za-z\s]+\.?$/;
  
    if (!executiveNameRegex.test(executiveName.value)) {
      document.getElementById("error1").innerHTML =
        "Name is required.";
      executiveName.style.border = "1px solid red";
      return false;
    } else {
      document.getElementById("error1").innerHTML = "";
      executiveName.style.border = "1px solid green";
    }    


}); 