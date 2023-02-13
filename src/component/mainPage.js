import { logOut, createPost } from '../firebase';

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
  const LineLogOut = document.createElement('li');
  LineLogOut.classList.add('logOutContainer');
  const logOutButton = document.createElement('button');
  logOutButton.classList.add('logOutButton');
  logOutButton.onclick = logOut;

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

  principalPage.appendChild(headerPrincPage); // Header dentro de principalPage
  headerPrincPage.appendChild(checkBox);
  headerPrincPage.appendChild(labelCheck);
  labelCheck.appendChild(iconMenu);
  headerPrincPage.appendChild(menuNav);
  menuNav.appendChild(cuadroMenu);
  cuadroMenu.appendChild(lineMenuSearch);
  cuadroMenu.appendChild(lineMenuBtnSearch);
  cuadroMenu.appendChild(lineMenuProfile);
  cuadroMenu.appendChild(LineLogOut);
  lineMenuSearch.appendChild(inputSearchProfile);
  lineMenuBtnSearch.appendChild(searchButton);
  lineMenuProfile.appendChild(profileButton);
  LineLogOut.appendChild(logOutButton);
  // fin de cambios

  const postMain = document.createElement('div'); // Contiene input del post, btn publicar y btn like
  postMain.classList.add('postMain'); // postMain dentro de principalPage
  // Todo dentro de postMain
  const publishPostBtnContainer = document.createElement('div'); // Contiene input y publishBtn
  publishPostBtnContainer.classList.add('publishPostBtnContainer');
  const post = document.createElement('textarea');
  post.classList.add('usersPost');
  post.setAttribute('id', 'postTextArea');
  post.setAttribute('rows', '4');
  post.setAttribute('cols', '50');
  const publish = document.createElement('button');
  publish.addEventListener('click', handleCreatePost);
  publish.classList.add('publishPostButton');
   // muro donde se visualizaran las publicaciones
   const publishPostWallContainer = document.createElement('div');// donde se visualizaran los post los post
   publishPostWallContainer.classList.add('publishPostWallContainer');
   const postPublish = document.createElement('div');
   const buttonContainer = document.createElement('div');
   buttonContainer.classList.add('buttonContainer');
 
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('deleteButton');
   deleteBtn.textContent = 'Delete';
   const editBtn = document.createElement('button');
   editBtn.classList.add('editButton');
   editBtn.textContent = 'Edit';
   const likesBtn = document.createElement('button');
   likesBtn.classList.add('likeButton');

  publishPostBtnContainer.appendChild(post);
  publishPostBtnContainer.appendChild(publish);
  publishPostWallContainer.appendChild(postPublish);
  publishPostWallContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);
  buttonContainer.appendChild(likesBtn);
  postMain.appendChild(publishPostBtnContainer);
  postMain.appendChild(publishPostWallContainer);

  principalPage.appendChild(postMain);
  return principalPage;
};

function handleCreatePost() {
  const postContent = document.getElementById('postTextArea');
  const getUsername = localStorage.getItem('username');
  createPost(getUsername, postContent.value);
  postContent.value = '';
  // mandar llamar textarea con id
  // guardar en var localStorage.getitem
  // llamar createPost(y pasar parámetros)
  // ligar handleCP al boton
}
