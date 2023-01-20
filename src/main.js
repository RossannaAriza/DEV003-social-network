// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

document.getElementById("SignInButtonOption").addEventListener("click", SignUp);
function SignUp(){
    const signUpMain=document.getElementById("mainSignUp");
    signUpMain.classList.add("showMain");
    signUpMain.classList.remove("hideMain");
    const logInMain=document.getElementById("mainLogIn"); 
    logInMain.classList.add("hideMain");
    logInMain.classList.remove("showMain");
//Para dar sombreado al seleccionar sign up
    const signUpSelected=document.getElementById("SignInButtonOption");
    signUpSelected.classList.add("btnSelected");
    const logInSelected=document.getElementById("LogInButtonOption");
    logInSelected.classList.remove("btnSelected");
}

document.getElementById("LogInButtonOption").addEventListener("click", LogIn);
function LogIn() {
    const signUpMain=document.getElementById("mainSignUp");
    signUpMain.classList.add("hideMain");
    signUpMain.classList.remove("showMain");
    const logInMain=document.getElementById("mainLogIn");
    logInMain.classList.add("showMain");
    logInMain.classList.remove("hideMain");
//Para dar sombreado al seleccionar log in
    const logInSelected=document.getElementById("LogInButtonOption");
    logInSelected.classList.add("btnSelected");
    const signInSelected=document.getElementById("SignInButtonOption");
    signInSelected.classList.remove("btnSelected");
}