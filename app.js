const showbtns = document.querySelectorAll('.show');
const hidebtns = document.querySelectorAll('.hide');

function showPwd(e)
{
    var array = e.path;
    var className = array[1].parentNode.className;

    var passwordField = document.getElementById(`${className}`);
    var showbtn = document.getElementById(className === "pwd1" ? "show-pwd1" : "show-pwd2");
    var hidebtn = document.getElementById(className === "pwd1" ? "hide-pwd1" : "hide-pwd2")
    passwordField.type = "text";
    showbtn.style.display = "none";
    hidebtn.style.display = "unset";
}

function hidePwd(e)
{
    var array = e.path;
    var className = array[1].parentNode.className;

    var passwordField = document.getElementById(`${className}`);
    var showbtn = document.getElementById(className === "pwd1" ? "show-pwd1" : "show-pwd2");
    var hidebtn = document.getElementById(className === "pwd1" ? "hide-pwd1" : "hide-pwd2")
    passwordField.type = "password";
    showbtn.style.display = "unset";
    hidebtn.style.display = "none";
}

showbtns.forEach(show =>
show.addEventListener('click', showPwd));

hidebtns.forEach(hide =>
hide.addEventListener('click', hidePwd))


function checkPwd()
{
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    var submitbtn = document.getElementById("submitbtn");
    if (pwd1.value != pwd2.value || pwd2.value != pwd1.value)
    {
        pwd1.style.boxShadow = "4px 4px 60px 8px red";
        pwd1.style.backgroundColor = "red";
        pwd2.style.boxShadow = "4px 4px 60px 8px red";
        pwd2.style.backgroundColor = "red";
        submitbtn.disabled = true;
    } else {
        pwd1.style.boxShadow = "4px 4px 60px 8px rgba(0, 0, 0, 0.2)";
        pwd1.style.backgroundColor = "unset";
        pwd2.style.boxShadow = "4px 4px 60px 8px rgba(0, 0, 0, 0.2)";
        pwd2.style.backgroundColor = "unset";
        submitbtn.disabled = false;
    }
}