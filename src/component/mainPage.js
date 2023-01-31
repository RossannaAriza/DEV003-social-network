export const MainPage = () => {
  const principalPage = document.createElement('div'); // contiene toda la segunda vista
  principalPage.classList.add('principalPage');
  const headerPrincPage = document.createElement('div');
  headerPrincPage.classList.add('headerPrincipalPage');
  // Todo esto dentro de headerPrincipalPage
  const inputSearchProfile = document.createElement('input');
  inputSearchProfile.classList.add('inputSearchProfile');
  inputSearchProfile.placeholder = 'Search User';
  const searchButton = document.createElement('button');
  searchButton.classList.add('searchButton');
  const profileButton = document.createElement('button');
  profileButton.classList.add('profileButton');

  principalPage.appendChild(headerPrincPage); // Header dentro de principalPage

  // se crea menu para diseño responsive, menu hamburguesa
  const checkBox = document.createElement('input');
  checkBox.setAttribute('id', 'check');
  checkBox.setAttribute('type', 'checkbox');
  const labelCheck = document.createElement('label');
  labelCheck.classList.add('btnMenu');
  labelCheck.setAttribute('for', 'check');
  const iconMenu = document.createElement('img');
  iconMenu.setAttribute('id', 'menuImg');
  iconMenu.src = './img/menu.png';
  const menuNav = document.createElement('nav');
  menuNav.classList.add('menuNav');
  const cuadroMenu = document.createElement('ul');
  const lineMenuSearch = document.createElement('li');
  const lineMenuBtnSearch = document.createElement('li');
  const lineMenuProfile = document.createElement('li');

  headerPrincPage.appendChild(checkBox);
  headerPrincPage.appendChild(labelCheck);
  labelCheck.appendChild(iconMenu);
  headerPrincPage.appendChild(menuNav);
  menuNav.appendChild(cuadroMenu);
  cuadroMenu.appendChild(lineMenuSearch);
  cuadroMenu.appendChild(lineMenuBtnSearch);
  cuadroMenu.appendChild(lineMenuProfile);
  lineMenuSearch.appendChild(inputSearchProfile);
  lineMenuBtnSearch.appendChild(searchButton);
  lineMenuProfile.appendChild(profileButton);
  // fin de cambios

  const postMain = document.createElement('div'); // Contiene input del post, btn publicar y btn like
  postMain.classList.add('postMain'); // postMain dentro de principalPage
  // Todo dentro de postMain
  const post = document.createElement('input');
  post.classList.add('usersPost');
  const publish = document.createElement('button');
  publish.classList.add('publishPostButton');
  const likes = document.createElement('button');
  likes.classList.add('likeButton');

  postMain.appendChild(post);
  postMain.appendChild(publish);
  postMain.appendChild(likes);

  principalPage.appendChild(postMain);

  // const mainNav = document.createElement('div'); // Contiene botones e input de búsqueda
  // mainNav.classList.add('mainNav');
  // const searchProfile = document.createElement('input'); // Dentro de mainNav
  // searchProfile.setAttribute('id', 'searchProfile');
  // searchProfile.placeholder = 'search user';
  // const searchIconBtn = document.createElement('button');
  // searchIconBtn.setAttribute('id', 'searchIconBtn');
  /* searchIconBtn.onclick = showUserFind; agregar funcion */
  // searchIconBtn.textContent = ''; // buscar como agregar imagen
  // const profileBtn = document.createElement('button'); // Dentro de mainNav
  // profileBtn.setAttribute('id', 'profile');
  /* profileBtn.onclick = showProfile; agregar funcion */
  // profileBtn.textContent = ''; // buscar como agregar imagen

  // postMain.appendChild(mainNav);

  // mainNav.appendChild(searchProfile);
  // mainNav.appendChild(searchButton);
  // mainNav.appendChild(profileBtn);

  // const wallPost = document.createElement('div');
  // wallPost.classList.add('wallPost');
  // const imagenPost = document.createElement('div');
  // imagenPost.classList.add('imagenPost');
  // const usernamePost = document.createElement('h2');
  // usernamePost.classList.add('usernamePost');
  // const recipeName = document.createElement('h3');
  // recipeName.classList.add('recipeName');
  // const recipeText = document.createElement('p');
  // recipeText.classList.add('recipeText');
  // const likeBtn = document.createElement('button');
  // likeBtn.classList.add('like');
  /* likeBtn.onclick = showLike; agregar funcion */
  // likeBtn.textContent = 'Like';
  // const commentBtn = document.createElement('button');
  // commentBtn.classList.add('comment');
  /* commentBtn.onclick = createComment; agregar funcion */
  // commentBtn.textContent = 'Comment';

  // postMain.appendChild(wallPost);

  // wallPost.appendChild(imagenPost);
  // wallPost.appendChild(usernamePost);
  // wallPost.appendChild(recipeName);
  // wallPost.appendChild(recipeText);
  // wallPost.appendChild(likeBtn);
  // wallPost.appendChild(commentBtn);

  // principalPage.appendChild(postMain);
  return principalPage;
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
