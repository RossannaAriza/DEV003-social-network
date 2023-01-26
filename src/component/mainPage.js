export const MainPage = () => {
  const mainLabel = document.createElement('main'); // main contiene todo, hasta background img
  mainLabel.classList.add('mainLabel');

  const postMain = document.createElement('div'); // contiene nav y div donde se ven los post
  postMain.classList.add('postMain');

  const menuNav = document.createElement('div');
  menuNav.classList.add('menu');
  const searchProfile = document.createElement('input');
  searchProfile.setAttribute('id', 'searchProfile');
  searchProfile.placeholder = 'search user';
  const searchIconBtn = document.createElement('button');
  searchIconBtn.setAttribute('id', 'searchIconBtn');
  /* searchIconBtn.onclick = showUserFind; agregar funcion */
  searchIconBtn.textContent = ''; // buscar como agregar imagen
  const profileBtn = document.createElement('button');
  profileBtn.setAttribute('id', 'profile');
  /* profileBtn.onclick = showProfile; agregar funcion */
  profileBtn.textContent = ''; // buscar como agregar imagen

  postMain.appendChild(menuNav);

  menuNav.appendChild(searchProfile);
  menuNav.appendChild(searchIconBtn);
  menuNav.appendChild(profileBtn);

  const wallPost = document.createElement('div');
  wallPost.classList.add('wallPost');
  const imagenPost = document.createElement('div');
  imagenPost.classList.add('imagenPost');
  const usernamePost = document.createElement('h2');
  usernamePost.classList.add('usernamePost');
  const recipeName = document.createElement('h3');
  recipeName.classList.add('recipeName');
  const recipeText = document.createElement('p');
  recipeText.classList.add('recipeText');
  const likeBtn = document.createElement('button');
  likeBtn.classList.add('like');
  /* likeBtn.onclick = showLike; agregar funcion */
  likeBtn.textContent = 'Like';
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment');
  /* commentBtn.onclick = createComment; agregar funcion */
  commentBtn.textContent = 'Comment';

  postMain.appendChild(wallPost);

  wallPost.appendChild(imagenPost);
  wallPost.appendChild(usernamePost);
  wallPost.appendChild(recipeName);
  wallPost.appendChild(recipeText);
  wallPost.appendChild(likeBtn);
  wallPost.appendChild(commentBtn);

  mainLabel.appendChild(postMain);
  return mainLabel;
};
/* export  function showUserFind(){
    const signUpMain = document.getElementById("mainSignUp");
    signUpMain.classList.add("showMain");
    signUpMain.classList.remove("hideMain");
    const logInMain = document.getElementById("mainLogIn");
    logInMain.classList.add("hideMain");
    logInMain.classList.remove("showMain"); Para dar sombreado al seleccionar sign up
    const signUpSelected = document.getElementById("SignInButtonOption");
    signUpSelected.classList.add("btnSelected");
    const logInSelected = document.getElementById("LogInButtonOption");
    logInSelected.classList.remove("btnSelected");
}
export function showProfile() {}
export function showLike() {}
export function createComment() {} */
