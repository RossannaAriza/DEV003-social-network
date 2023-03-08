// Este es el punto de entrada de tu aplicacion
import { Home } from './component/home.js';
import { MainPage } from './component/mainPage.js';
import { profile } from './component/profile';
import { createAccountFunction, loginAccountFunction, loginWithGoogle } from './firebase.js';
const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/mainPage': MainPage,
  '/profile': profile,
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component()); // carga la sig ruta
const googleBtn = document.getElementById('googleButton'); // Para menú log in
googleBtn.onclick = loginWithGoogle;
const googleBtnn = document.getElementById('googleButtonn'); // Para menú sign up
googleBtnn.onclick = loginWithGoogle;


/*logout.addEventListener('click',(e)=>{

const component = routes[window.location.pathname];

rootDiv.appendChild(component());*/

// firebase
document.getElementById('createAccount')?.addEventListener('click', createAccountFunction);
document.getElementById('googleButton')?.addEventListener('click', createAccountFunction);
// document.getElementById('createAccount').addEventListener('click', validateForm);

document.getElementById('LogInAccount')?.addEventListener('click', loginAccountFunction);
document.getElementById('googleButton')?.addEventListener('click', loginAccountFunction);
/*const linkForgotPassword = document.getElementById('forgotPassword');
linkForgotPassword.onclick = passwordResetEmail;*/
