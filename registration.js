


function store()
{
var pname = document.getElementById('pname');
var ppw = document.getElementById('ppw');
var usname = document.getElementById('usname');
var uemail = document.getElementById('uemail');

       req();
       vali();
    
    localStorage.setItem('pname', pname.value);
    localStorage.setItem('ppw', ppw.value);
    localStorage.setItem('usname', usname.value);
    localStorage.setItem('uemail', uemail.value);
    
    location.replace("login.html");

}
function vali()
{
    
    var text=document.getElementById("uemail").value;
    var reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  

if(reg.test(text))
{
    
    document.getElementById("lbl1").innerHTML="";
    document.getElementById("lbl1").style.visibility="hidden";
    document.getElementById("lbl1").style.color="green";
}
else
{
    
    document.getElementById("lbl1").innerHTML="Invalid Email-id";
    document.getElementById("lbl1").style.visibility="visible";
    document.getElementById("lbl1").style.color="red";
    preventBack();
}

var text1=document.getElementById("ppw").value;
var reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;


if(reg.test(text1))
{

document.getElementById("lbl2").innerHTML="";
document.getElementById("lbl2").style.visibility="hidden";
document.getElementById("lbl2").style.color="green";

}

else
{

document.getElementById("lbl2").innerHTML="password must contain 1 special character,1 alphabate 1 number and length must be 8 character";
document.getElementById("lbl2").style.visibility="visible";
document.getElementById("lbl2").style.color="red";
preventBack();
}
var text=document.getElementById("usname").value;
    var reg=/[^A-Za-z]+$/;
    

    if(reg.test(text))
    
{
    document.getElementById("lbl4").innerHTML="Not a valid Name";
    document.getElementById("lbl4").style.visibility="visible";
    document.getElementById("lbl4").style.color="red";
    preventBack();
    
    
}
else
{
    document.getElementById("lbl4").innerHTML="";
    document.getElementById("lbl4").style.visibility="hidden";
    document.getElementById("lbl4").style.color="green";
    
}
   var text1=document.getElementById("pname").value;
    var reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    

if(reg.test(text1))
{
    
    document.getElementById("lbl5").innerHTML="";
    document.getElementById("lbl5").style.visibility="hidden";
    document.getElementById("lbl5").style.color="green";
   
}
else
{
    
    document.getElementById("lbl5").innerHTML="Username must contain 1 alphabate,1 number and one special character,length must be 8 character";
    document.getElementById("lbl5").style.visibility="visible";
    document.getElementById("lbl5").style.color="red";
    preventBack();
}
var text1=document.getElementById("ppw").value;
var text2=document.getElementById("cpw").value;


if(text1!=text2)
{
document.getElementById("lbl3").innerHTML="password do not match";
document.getElementById("lbl3").style.visibility="visible";
document.getElementById("lbl3").style.color="red";
preventBack();
}
else
{
document.getElementById("lbl3").innerHTML="";
document.getElementById("lbl3").style.visibility="hidden";
document.getElementById("lbl3").style.color="green";


}
}
function req()
{
    var text1=document.getElementById("usname").value;
    var text2 =document.getElementById("uemail").value;
    var text3 =document.getElementById("pname").value;
    var text4 =document.getElementById("ppw").value;
    var text5 =document.getElementById("cpw").value;
    if(text1=="")
    {
        document.getElementById("lbl4").innerHTML="Name is required";
        document.getElementById("lbl4").style.visibility="visible";
        document.getElementById("lbl4").style.color="red";
          
    }
    if(text2=="")
    {
        document.getElementById("lbl1").innerHTML="Email is required";
        document.getElementById("lbl1").style.visibility="visible";
        document.getElementById("lbl1").style.color="red";
        
    }
    if(text3=="")
    {
        document.getElementById("lbl5").innerHTML="UserName is required";
        document.getElementById("lbl5").style.visibility="visible";
        document.getElementById("lbl5").style.color="red";
        
    }
    if(text4=="")
    {
        document.getElementById("lbl2").innerHTML="Password is required";
        document.getElementById("lbl2").style.visibility="visible";
        document.getElementById("lbl2").style.color="red";
        
    }
    if(text5=="")
    {
        document.getElementById("lbl3").innerHTML="Confirm password is required";
        document.getElementById("lbl3").style.visibility="visible";
        document.getElementById("lbl3").style.color="red";
        
    }
}
 function preventback()
{
    location.replace("registration.html");
}


