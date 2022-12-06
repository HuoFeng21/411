function myFunction() {
    var x =  document.getElementById("myText1").value;
    if (x==""){
        alert("Username can't be blank");  
        return false;  
    }else if(isNaN(x)){
        location.href="jieshao.html"
    }else{location.href="kecheng.html"}
    document.getElementById("demo").innerHTML = greeting;




}