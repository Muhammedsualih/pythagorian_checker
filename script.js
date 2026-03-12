const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const userIcon = document.getElementById("user-icon");
const passIcon = document.getElementById("pass-icon");

/* username pattern Validation */
function isValidUsername(username){
return /^[A-Za-z]{6}$/.test(username);
}

function isValidPassword(password){
return password.includes("SWUSTCST");
}


/* Real time username check */

usernameInput.addEventListener("input", ()=>{

let value = usernameInput.value;

if(isValidUsername(value)){
usernameInput.classList.remove("invalid");
usernameInput.classList.add("valid");
userIcon.innerHTML="✔️";
}
else{
usernameInput.classList.remove("valid");
usernameInput.classList.add("invalid");
userIcon.innerHTML="X";
}

});


/* Real time password check */

passwordInput.addEventListener("input", ()=>{

let value = passwordInput.value;

if(isValidPassword(value)){
passwordInput.classList.remove("invalid");
passwordInput.classList.add("valid");
passIcon.innerHTML="✔️";
}
else{
passwordInput.classList.remove("valid");
passwordInput.classList.add("invalid");
passIcon.innerHTML="X";
}

});


/* Login handler */

function handleLogin(){

if(!isValidUsername(usernameInput.value)){
alert("Username must be 6 letters");
return;
}

if(!isValidPassword(passwordInput.value)){
alert("Password must contain 'SWUSTCST'.");
return;
}

window.location.href="index.html";

}

function logout(){
window.location.href="login.html";
}

/* Check if the numbers are a Pythagorean triples */

function isPythagorean(a,b,c){
const nums=[a,b,c].sort((x,y)=>x-y);
return nums[0]**2 + nums[1]**2 === nums[2]**2;
}

/* Check if the number is valid */
function isValidNumber(value){
    return value > 0;
}

function handleCheck(){

let a=Number(document.getElementById("a").value);
let b=Number(document.getElementById("b").value);
let c=Number(document.getElementById("c").value);

if(!isValidNumber(a) || !isValidNumber(b) || !isValidNumber(c)){
 alert("Please enter valid positive integers.");
return;
}

let result=document.getElementById("result");

if(isPythagorean(a,b,c)){
result.style.color="green";
result.innerText="Valid Pythagorean Triple";
}
else{
result.style.color="red";
result.innerText="Not a Pythagorean Triple";
}

}