export function showSignUp() {
  const signUpMain = document.getElementById('mainSignUp');
  signUpMain.classList.add('showMain');
  signUpMain.classList.remove('hideMain');
  const logInMain = document.getElementById('mainLogIn');
  logInMain.classList.add('hideMain');
  logInMain.classList.remove('showMain');
  // Para dar sombreado al seleccionar sign up
  const signUpSelected = document.getElementById('SignInButtonOption');
  signUpSelected.classList.add('btnSelected');
  const logInSelected = document.getElementById('LogInButtonOption');
  logInSelected.classList.remove('btnSelected');
}
export function showLogIn() {
  const signUpMain = document.getElementById('mainSignUp');
  signUpMain.classList.add('hideMain');
  signUpMain.classList.remove('showMain');
  const logInMain = document.getElementById('mainLogIn');
  logInMain.classList.add('showMain');
  logInMain.classList.remove('hideMain');
  // Para dar sombreado al seleccionar log in
  const logInSelected = document.getElementById('LogInButtonOption');
  logInSelected.classList.add('btnSelected');
  const signInSelected = document.getElementById('SignInButtonOption');
  signInSelected.classList.remove('btnSelected');
}

export const Home = () => {
  const mainLabel = document.createElement('main'); // main contiene todo, hasta background img
  mainLabel.classList.add('mainLabel');
  const principalMain = document.createElement('div'); // contiene btns y menús
  principalMain.classList.add('principalMain');
  const SignLogButtons = document.createElement('div'); // contiene btns sign up log in
  SignLogButtons.classList.add('SignLogButtons');
  const SignUp = document.createElement('button'); // debe ir en SignLogButtons
  SignUp.onclick = showSignUp;
  SignUp.classList.add('SignUp');
  SignUp.classList.add('btnSelected');
  SignUp.setAttribute('id', 'SignInButtonOption');
  SignUp.textContent = 'Sign Up';
  const LogIn = document.createElement('button'); // debe ir en SignLogButtons
  LogIn.onclick = showLogIn;
  LogIn.classList.add('LogIn');
  LogIn.setAttribute('id', 'LogInButtonOption');
  LogIn.textContent = 'Log In';
  SignLogButtons.appendChild(SignUp); // Btn Sign Up dentro de SignLogButtons
  SignLogButtons.appendChild(LogIn); // Btn Log In dentro de SignLogButtons
  principalMain.appendChild(SignLogButtons); // SignLogButtons dentro de principalMain

  // SignUp
  const mainSignUp = document.createElement('div');// Menú Sign Up
  mainSignUp.classList.add('mainSignUp');
  mainSignUp.classList.add('showMain');
  mainSignUp.setAttribute('id', 'mainSignUp');
  // Todo esto dentro de mainSignUp
  const email = document.createElement('input');
  email.placeholder = 'Your e-mail adress';
  email.classList.add('e-mail');
  email.setAttribute('id', 'email');
  const username = document.createElement('input');
  username.placeholder = 'Username';
  username.classList.add('username');
  username.setAttribute('id', 'username');
  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'Password';
  password.classList.add('password');
  password.setAttribute('id', 'password');
  const createAccount = document.createElement('button');
  createAccount.classList.add('createAccount');
  createAccount.setAttribute('id', 'createAccount');
  createAccount.textContent = 'CreateAccount';

  mainSignUp.appendChild(email);
  mainSignUp.appendChild(username);
  mainSignUp.appendChild(password);
  mainSignUp.appendChild(createAccount);
  principalMain.appendChild(mainSignUp); // mainSignUp dentro de principalMain

  const mainLogIn = document.createElement('div'); // debe ir dentro de principalMain
  mainLogIn.classList.add('mainLogIn');
  mainLogIn.classList.add('hideMain');
  mainLogIn.setAttribute('id', 'mainLogIn');
  // Todo dentro de mainLogIn
  const user = document.createElement('input');
  user.placeholder = 'E-mail';
  user.classList.add('user');
  user.setAttribute('id', 'EmailLogin');
  const passwordLogIn = document.createElement('input');
  passwordLogIn.type = 'password';
  passwordLogIn.placeholder = 'Password';
  passwordLogIn.setAttribute('id', 'PasswordLogIn');
  const LogInBtn = document.createElement('button');
  LogInBtn.classList.add('LogInBtn');
  LogInBtn.setAttribute('id', 'LogInAccount');
  LogInBtn.textContent = 'Log In';
  const googleBtn = document.createElement('button');
  googleBtn.classList.add('googleBtn');
  googleBtn.setAttribute('id', 'googleButton');
  /* googleBtn.addEventListener('click', () => onNavigate('/mainPage')); */
  const forgotUsernameOption = document.createElement('div');
  const a = document.createElement('a');
  a.href = '#';
  a.classList.add('forgotUsernameOpt');
  a.textContent = 'I forgot my username or password';
  forgotUsernameOption.appendChild(a);
  mainLogIn.appendChild(user);
  mainLogIn.appendChild(passwordLogIn);
  mainLogIn.appendChild(LogInBtn);
  mainLogIn.appendChild(googleBtn);
  mainLogIn.appendChild(forgotUsernameOption);
  mainLogIn.appendChild(a);

  principalMain.appendChild(mainLogIn);
  // mainLabel.appendChild(principalMain);

  mainLabel.appendChild(principalMain); // principalMain dentro de mainLabel
  return mainLabel;
};
