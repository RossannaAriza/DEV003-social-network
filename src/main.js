// Este es el punto de entrada de tu aplicacion
import { Home } from './component/home.js';
import { MainPage } from './component/mainPage.js';
import { createAccountFunction, loginAccountFunction, loginWithGoogle } from './firebase.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/mainPage': MainPage,
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component()); // carga la sig ruta
const googleBtn = document.getElementById('googleButton');
googleBtn.onclick = loginWithGoogle;


/*logout.addEventListener('click',(e)=>{

const component = routes[window.location.pathname];

rootDiv.appendChild(component());*/

// firebase
document.getElementById('createAccount')?.addEventListener('click', createAccountFunction);
// createAccountFunction.addEventListener('click', createAccountFunction);
// loginAccountFunction.addEventListener('click', loginAccountFunction);
document.getElementById('LogInAccount')?.addEventListener('click', loginAccountFunction);
