

let btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", evento=>{
    saveFields();
});

let saveFields = async()=>{

let fields = {}

fields.username = document.getElementsById("username").value;
fields.password = document.getElementsById("password").value;

const request = await fetch("http://localhost:8080/auth/login",
{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(fields)
});



}