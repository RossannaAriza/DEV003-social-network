// import { doc } from 'firebase/firestore';
import {
  logOut, createPost, editPost, deletePost,
} from '../firebase';
// import { recoverData } from './firebase.js';

const postsContainer = document.createElement('div');
postsContainer.classList.add('postsContainer');
postsContainer.setAttribute('id', 'postsContainer');
const handleCreatePost = () => {
  const postContent = document.getElementById('postTextArea');
  const getUsername = localStorage.getItem('username');
  const uid = localStorage.getItem('uid');
  createPost(getUsername, postContent.value, uid);
  postContent.value = '';
  // mandar llamar textarea con id
  // guardar en var localStorage.getitem
  // llamar createPost(y pasar parámetros)
  // ligar handleCP al boton
};

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
  publish.classList.add('publishPostButton');
  publishPostBtnContainer.appendChild(post);
  publishPostBtnContainer.appendChild(publish);
  postMain.appendChild(publishPostBtnContainer);
  postMain.appendChild(postsContainer);

  principalPage.appendChild(postMain);
  return principalPage;
};

export const muroStructure = (doc) => {
  const postObjects = doc.data();
  const postUsername = postObjects.username;
  const postUid = postObjects.uid;
  const postTxt = postObjects.text;
  const postLikes = postObjects.likes;
  const idPostObject = doc.id;
  const userUid = localStorage.getItem('uid'); // usuario conectado
  console.log(userUid);
  const dateObj = postObjects.dateTime.toDate();
  const postsDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

  const postMold = document.createElement('div'); // Contenedor del post
  postMold.classList.add('postMold');
  const usernameContainer = document.createElement('div'); // Contenedor username
  usernameContainer.classList.add('usernameContainer'); // user's name
  const username = document.createElement('h4');
  username.classList.add('username');
  username.innerHTML = postUsername;
  const uid = document.createElement('h4');
  uid.classList.add('uid');
  uid.innerHTML = postUid;
  const dateContainer = document.createElement('div');
  dateContainer.classList.add('dateContainer');
  const postDate = document.createElement('h5');
  postDate.classList.add('postDate');
  postDate.innerHTML = postsDate;
  const postContentContainer = document.createElement('div');
  postContentContainer.classList.add('postContentContainer');
  const postTextContent = document.createElement('h3');
  postTextContent.classList.add('postTextContent');
  postTextContent.innerHTML = postTxt;
  const previousPostsLikes = document.createElement('div');
  previousPostsLikes.classList.add('previousPostsLikes');
  const postCountedLikes = document.createElement('h4');
  postCountedLikes.classList.add('postCountedLikes');
  postCountedLikes.innerHTML = `Likes: ${postLikes}`;
  const postButtonsContainer = document.createElement('div');// donde se visualizaran los post los post
  postButtonsContainer.classList.add('postButtonsContainer');
  const likeBtnContainer = document.createElement('div');
  likeBtnContainer.classList.add('likeBtnContainer');
  const counterContainer = document.createElement('div'); // dentro de likeBtnContainer
  counterContainer.classList.add('counterContainer');
  const likeCounterSpan = document.createElement('span'); // detro de counterContainer
  likeCounterSpan.setAttribute('id', 'valor');
  const likesBtn = document.createElement('button');
  likesBtn.classList.add('likeButton');
  likesBtn.setAttribute('id', 'likesBtn');
  const editDeletContainer = document.createElement('div');
  editDeletContainer.classList.add('editDeletContainer');
  const editBtn = document.createElement('button');
  editBtn.classList.add('editButton');
  editBtn.setAttribute('id', 'editButton');
  editBtn.textContent = 'Edit';
  // Estructura modal boton edit
  const modalEditText = document.createElement('div');
  modalEditText.setAttribute('id', 'divModalEdit');
  const modalEditContent = document.createElement('div');
  modalEditContent.setAttribute('id', 'divModalEditContent');
  const closeModal = document.createElement('span');
  closeModal.setAttribute('id', 'spanCloseModal');
  closeModal.textContent = 'X';
  const detail = document.createElement('h2');
  detail.setAttribute('id', 'h2Detail');
  detail.textContent = 'Edit the recipe';
  const newPost = document.createElement('textarea');
  newPost.classList.add('usersPost');
  newPost.setAttribute('id', 'newPostTextArea');
  newPost.setAttribute('rows', '8');
  newPost.setAttribute('cols', '50');
  newPost.placeholder = postTxt;
  const modalEditBtn = document.createElement('button');
  modalEditBtn.setAttribute('id', 'modalEditBtn');
  modalEditBtn.textContent = 'Edit';

  modalEditText.appendChild(modalEditContent);
  modalEditContent.appendChild(closeModal);
  modalEditContent.appendChild(detail);
  modalEditContent.appendChild(newPost);
  modalEditContent.appendChild(modalEditBtn);

  postsContainer.appendChild(modalEditText);

  editBtn.addEventListener('click', () => {
    modalEditText.style.display = 'block';
  });
  closeModal.addEventListener('click', () => {
    modalEditText.style.display = 'none';
  });
  modalEditBtn.addEventListener('click', () => {
    editPost(idPostObject, newPost.value);
    modalEditText.style.display = 'none';
  });
  //
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteButton');
  deleteBtn.textContent = 'Delete';
  // Estructura modal boton delete
  const modalDeleteText = document.createElement('div');
  modalDeleteText.classList.add('modalDeleteText');
  modalDeleteText.setAttribute('id', 'divModalDelete');
  const modalDeleteContent = document.createElement('div');
  modalDeleteContent.setAttribute('id', 'divModalDeleteContent');
  const closeModalDelete = document.createElement('span');
  closeModalDelete.setAttribute('id', 'spanCloseModalDelete');
  closeModalDelete.textContent = 'X';
  const detailDelete = document.createElement('h2');
  detailDelete.setAttribute('id', 'h2DetailDelete');
  detailDelete.textContent = 'Are you sure delete recipe?';
  const modalDeleteBtn = document.createElement('button');
  modalDeleteBtn.setAttribute('id', 'modalDeleteBtn');
  modalDeleteBtn.textContent = 'Sure';

  modalDeleteText.appendChild(modalDeleteContent);
  modalDeleteContent.appendChild(closeModalDelete);
  modalDeleteContent.appendChild(detailDelete);
  modalDeleteContent.appendChild(modalDeleteBtn);

  postsContainer.appendChild(modalDeleteText);

  deleteBtn.addEventListener('click', () => {
    modalDeleteText.style.display = 'block';
  });
  closeModalDelete.addEventListener('click', () => {
    modalDeleteText.style.display = 'none';
  });
  modalDeleteBtn.addEventListener('click', () => {
    deletePost(idPostObject);
    modalDeleteText.style.display = 'none';
  });
  //

  usernameContainer.appendChild(username);
  dateContainer.appendChild(postDate);
  postContentContainer.appendChild(postTextContent);
  previousPostsLikes.appendChild(postCountedLikes);
  counterContainer.appendChild(likeCounterSpan);
  likeBtnContainer.appendChild(counterContainer);
  likeBtnContainer.appendChild(likesBtn);
  postButtonsContainer.appendChild(likeBtnContainer);
  editDeletContainer.appendChild(editBtn);
  editDeletContainer.appendChild(deleteBtn);
  postButtonsContainer.appendChild(editDeletContainer);

  postMold.appendChild(usernameContainer);
  postMold.appendChild(dateContainer);
  postMold.appendChild(postContentContainer);
  postMold.appendChild(previousPostsLikes);
  postMold.appendChild(postButtonsContainer);
  postsContainer.appendChild(postMold);
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, ' => ', doc.data());

  // function likeShowsPostId (doc) {
  //   console.log(idPostObject);
  //   const likes = postLikes+1;
  //   console.log(likes);
  // }

  let contador = 0;

  const valor = document.getElementById('valor');
  const likeBtn = document.getElementById('likesBtn');

  likeBtn.onclick = function counter(doc) {
    console.log(idPostObject);
    // contador++;
    // valor.innerHTML = contador;

    if (uid===uid) {
      console.log("Son iguales");
      contador--;
      valor.innerHTML = contador;

    } else{
      console.log("Son diferentes");
      contador++;
      valor.innerHTML = contador;
    }
  };
  



  /* Restriccion button delete y edit
  if (postUid === userUid) {
    const buttonsAdmin = document.getElementById('postButtonsChanges');
    buttonsAdmin.style.display = 'block';
  } else {
    const buttonsAdmin = document.getElementById('postButtonsChanges');
    buttonsAdmin.style.display = 'none';
  } */
};

//
