$(document).ready(()=>{
    var login_bt = $("#login_bt");
    var login_username = $("#login_username");
    var login_password = $("#login_password");

    login_bt.click(()=>{
        checkCredentials(login);
    })
})

function checkCredentials(login){

    if(login_username.value == "admin" && login_password.value == "12345") login();
    else alert("Username : admin \nPassword : 12345")
}

function login(){
    window.location.href = "home.html"
}
