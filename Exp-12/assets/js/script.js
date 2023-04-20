function check(){
    const ageInput = document.getElementById("age").value;
    if (!ageInput) {
        document.getElementById("result").innerHTML = "Please enter your age !";
        return;
    }
    if (ageInput < 18) {
        document.getElementById("result").innerHTML = " ";
        alert("Sorry, you are not authorized to enter this site");
        
    }
     else if (ageInput >= 18){
        document.getElementById("result").innerHTML = "Hello, Welcome to the site !";
        
    }
    
}