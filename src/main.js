// Este es el punto de entrada de tu aplicacion
import { Home } from "./component/home.js";
import { MainPage } from "./component/mainPage.js";
import { createAccountFunction, loginAccountFunction } from "./firebase.js"

const rootDiv = document.getElementById("root");

const routes = {
    '/': Home,
    '/mainPage': MainPage,
    };

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
        );
        rootDiv.appendChild(routes[pathname]())
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());

// firebase
createAccount.addEventListener('click', createAccountFunction);
LogInAccount.addEventListener('click', loginAccountFunction);