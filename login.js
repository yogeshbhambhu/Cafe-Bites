function hide(){
    var login=document.getElementById("login-page");
    var signup=document.getElementById("signup-page");
    login.style.display="none";
    signup.style.display="block";

}
function show(){
    var login=document.getElementById("login-page");
    var signup=document.getElementById("signup-page");
    signup.style.display="none";
    login.style.display="block";

}




// start signup coding

function signup(){
    var name = document.getElementById("signup-username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("signup-pass").value;
    var mobile = document.getElementById("mobileno").value;
    var user_input = {name:name,email:email,password:password,mobile:mobile};
    user_data=JSON.stringify(user_input);

    if(name!="" && email!="" && password!="" && mobile!="")
    {
        localStorage.setItem(email,user_data);
        document.getElementById("success-text").innerHTML="signup success";
        document.getElementById("signup-username").value="";
        document.getElementById("email").value="";
        document.getElementById("signup-pass").value="";
        document.getElementById("mobileno").value="";
        setTimeout(function(){document.getElementById("success-text").innerHTML="";},2000);
        return false;
    }
}

function userfound(){
    var email = document.getElementById("email").value;
    if(localStorage.getItem(email) != null)
    {
        document.getElementById("user-exist").innerHTML="User Existed";
        document.getElementById("mobileno").disabled=true;
        document.getElementById("signup-pass").disabled=true;
        document.getElementById("signup-btn").disabled=true;
        document.getElementById("email").style.background="black";
        document.getElementById("email").style.color="white";
        document.getElementById("email").onclick=function(){
            this.value="";
            this.style.background="";
            this.style.color="";
            document.getElementById("user-exist").innerHTML="";
            document.getElementById("mobileno").disabled=false;
        document.getElementById("signup-pass").disabled=false;
        document.getElementById("signup-btn").disabled=false;
        }
    }
}
// login form
function login(){
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var login_input= {username:username,password:password};
    var login_data=JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var session_data = sessionStorage.getItem(username);
    var user_detail = JSON.parse(session_data);
    if(localStorage.getItem(user_detail.username)==null){
        alert("user not found");

    }
    else{
        if(localStorage.getItem(user_detail.username).match(user_detail.password)){
            location.replace('ip project.html');
            sessionStorage.setItem("user_mail",username);
            return false;
        }
        else{
            alert("password not matched");
        }
    }
}