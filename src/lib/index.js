import { Home } from '../component/home';
import { MainPage } from '../component/mainPage';
import { profile } from '../component/profile';

// aqui exportaras las funciones que necesites
export const onNavigate = (pathname) => { // pathname hacia donde se va a redirigir
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/mainPage': MainPage,
    '/profile': profile,
  };

  window.history.pushState( // a dónde te va a redirigir (localhost:3000/mainPage)
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) { // se ejecuta el código mientras se cumpla la condición
    rootDiv.removeChild(rootDiv.firstChild); // borra login y signup
    // para vaciar rootDiv y mostrar mainpage
  }
  rootDiv.appendChild(routes[pathname]());
};
