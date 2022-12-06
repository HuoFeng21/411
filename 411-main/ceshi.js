function myFunction() {
    var x =  document.getElementById("myText1").value;
    var y =  document.getElementById("myText2").value;
    var z =  document.getElementById("myText3").value;
    var t =  document.getElementById("myText4").value;
    if (x==""){
        alert("Username can't be blank");  
        return false;  
    }
else if(y==""){
    alert("Englishname can't be blank");  
        return false;  
}else if(isNaN(z) || z.length < 11 ){
    alert(" Please enter the correct phone number");  
        return false;  
}
else if(t==""){
    alert("email can't be blank");  
       return false; 
    }else{location.href="mailto:username@hotmail.com"}
    document.getElementById("demo").innerHTML = greeting;
   }
