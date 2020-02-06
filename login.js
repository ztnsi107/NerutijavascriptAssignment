function check() {
   
  
    var storedName = localStorage.getItem('pname');
    var storedPw = localStorage.getItem('ppw');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

   
    if(userName.value == storedName && userPw.value == storedPw) 
    {
    
        return true;
    }
    else {
        document.getElementById("lbl9").innerHTML="username or password do not match";
        document.getElementById("lbl9").style.visibility="visible";
        document.getElementById("lbl9").style.color="red";
        return false;
    }
}