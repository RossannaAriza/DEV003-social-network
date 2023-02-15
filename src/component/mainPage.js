// import { doc } from 'firebase/firestore';
import {
  logOut, createPost, recoverData, editPost,
} from '../firebase';
// import { recoverData } from './firebase.js';

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

const postsContainer = document.createElement('div');
postsContainer.classList.add('postsContainer');
postsContainer.setAttribute('id', 'postsContainer');

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
  const publishPostBtnContainer = document.createElement('div'); // Contiene input,
  publishPostBtnContainer.classList.add('publishPostBtnContainer');
  const post = document.createElement('textarea');
  post.classList.add('usersPost');
  post.setAttribute('id', 'postTextArea');
  post.setAttribute('rows', '4');
  post.setAttribute('cols', '50');
  const publish = document.createElement('button');
  publish.addEventListener('click', handleCreatePost);
  // publish.addEventListener('click', recoverData);
  recoverData();
  publish.classList.add('publishPostButton');
  publishPostBtnContainer.appendChild(post);
  publishPostBtnContainer.appendChild(publish);
  postMain.appendChild(publishPostBtnContainer);
  postMain.appendChild(postsContainer);

  principalPage.appendChild(postMain);
  return principalPage;
};

export function modalEdit(oldText, idDocOrigin) {
  const modalEditText = document.createElement('div');
  modalEditText.setAttribute('id', 'divModalEdit');
  const modalEditContent = document.createElement('div');
  modalEditContent.setAttribute('id', 'divModalEditContent');
  const closeModal = document.createElement('span');
  closeModal.setAttribute('id', 'spanCloseModal');
  const detail = document.createElement('h2');
  detail.setAttribute('id', 'h2Detail');
  detail.textContent = 'Edit the recipe';
  const newPost = document.createElement('textarea');
  newPost.classList.add('usersPost');
  newPost.setAttribute('id', 'newPostTextArea');
  newPost.setAttribute('rows', '4');
  newPost.setAttribute('cols', '50');
  newPost.placeholder = oldText;
  const modalEditBtn = document.createElement('button');
  modalEditBtn.setAttribute('id', 'modalEditBtn');
  modalEditBtn.textContent = 'Edit';

  modalEditText.appendChild(modalEditContent);
  modalEditContent.appendChild(closeModal);
  modalEditContent.appendChild(detail);
  modalEditContent.appendChild(newPost);
  modalEditContent.appendChild(modalEditBtn);

  document.getElementById('postsContainer').appendChild(modalEditText);

  const newPostContent = document.getElementById('newPostTextArea');
  editPost(idDocOrigin, newPostContent.value);
}
// export function showPreviousPosts() {
//   const postObjects = doc.data();
//   const postUsername = postObjects.username;
//   const postTxt = postObjects.text;
//   const postLikes = postObjects.likes;

//   const postMold = document.createElement('div'); // Contenedor del post
//   postMold.classList.add('postMold');
//   const usernameContainer = document.createElement("div"); // Contenedor username
//   usernameContainer.classList.add('usernameContainer'); // user's name
//   const username = document.createElement ('h3');
//   username.classList.add('username');
//   username.innerHTML = postUsername;
//   const postContentContainer = document.createElement("div");
//   postContentContainer.classList.add('postContentContainer');
//   const postTextContent = document.createElement('h4');
//   postTextContent.classList.add('postTextContent');
//   postTextContent.innerHTML = postTxt;
//   const previousPostsLikes = document.createElement('div');
//   previousPostsLikes.classList.add('previousPostsLikes');
//   const postCountedLikes = document.createElement('h4');
//   postCountedLikes.classList.add('postCountedLikes');
//   postCountedLikes.innerHTML = postLikes;

//   usernameContainer.appendChild(username);
//   postContentContainer.appendChild(postTextContent);
//   previousPostsLikes.appendChild(postCountedLikes);

//   postMold.appendChild(usernameContainer);
//   postMold.appendChild(postContentContainer);
//   postMold.appendChild(previousPostsLikes);

// }
