import {
  logOut, editPost, deletePost, backMenu,
} from '../firebase';
// import { onNavigate } from './lib/index';

export const profile = () => {
  const principalPageProfile = document.createElement('div'); // contiene toda la segunda vista
  principalPageProfile.classList.add('principalPageProfile');
  const headerPrincPageProfile = document.createElement('div');
  headerPrincPageProfile.classList.add('headerPrincPageProfile');
  // Todo esto dentro de headerPrincipalPage
  const backButton = document.createElement('button');
  backButton.classList.add('backButton');
  backButton.onclick = backMenu;
  const LineLogOut2 = document.createElement('li');
  LineLogOut2.classList.add('logOutContainer2');
  const logOutButton2 = document.createElement('button');
  logOutButton2.classList.add('logOutButton2');
  logOutButton2.onclick = logOut;

  // se crea menu para diseño responsive, menu hamburguesa
  const checkBoxProfile = document.createElement('input');
  checkBoxProfile.setAttribute('id', 'check2');
  checkBoxProfile.setAttribute('type', 'checkbox');
  const labelCheckProfile = document.createElement('label');
  labelCheckProfile.classList.add('btnMenuProfile');
  labelCheckProfile.setAttribute('for', 'check');
  const iconMenuProfile = document.createElement('img');
  iconMenuProfile.setAttribute('id', 'menuImg2');
  iconMenuProfile.src = './img/menu.png';
  const menuNavProfile = document.createElement('nav');
  menuNavProfile.classList.add('menuNav2');
  const cuadroMenuProfile = document.createElement('ul');
  const lineBackMenu = document.createElement('li');

  principalPageProfile.appendChild(headerPrincPageProfile); // Header dentro de principalPage
  headerPrincPageProfile.appendChild(checkBoxProfile);
  headerPrincPageProfile.appendChild(labelCheckProfile);
  labelCheckProfile.appendChild(iconMenuProfile);
  headerPrincPageProfile.appendChild(menuNavProfile);
  menuNavProfile.appendChild(cuadroMenuProfile);
  cuadroMenuProfile.appendChild(lineBackMenu);
  cuadroMenuProfile.appendChild(LineLogOut2);
  lineBackMenu.appendChild(backButton);
  LineLogOut2.appendChild(logOutButton2);
  // fin de cambios

  const perfilMain = document.createElement('div'); // Contiene input del post, btn publicar y btn like
  perfilMain.classList.add('perfilMain');
  const profileContainer = document.createElement('div'); // Contiene input,
  profileContainer.classList.add('profileContainer');
  const imageProfile = document.createElement('div');
  imageProfile.classList.add('imageProfile');
  const imageProfileMuro = document.createElement('img');
  imageProfileMuro.classList.add('imageProfileMuro');
  const infProfile = document.createElement('div');
  infProfile.classList.add('infProfile');
  const postsContainerProfile = document.createElement('div');
  postsContainerProfile.setAttribute('id', 'postsContainerProfile');
  const nameProfile = document.createElement('h2');
  nameProfile.classList.add('nameProfile');
  nameProfile.innerHTML = localStorage.getItem('username');
  const descriptionProfile = document.createElement('p');
  descriptionProfile.classList.add('descriptionProfile');
  descriptionProfile.innerHTML = 'Hello! How are you?, Remember that Healthy Sweet allows you to share and learn healthy pastry recipes.';

  infProfile.appendChild(nameProfile);
  infProfile.appendChild(descriptionProfile);
  perfilMain.appendChild(profileContainer);
  profileContainer.appendChild(imageProfile);
  profileContainer.appendChild(infProfile);
  perfilMain.appendChild(postsContainerProfile);

  principalPageProfile.appendChild(perfilMain);
  return principalPageProfile;
};

export const muroStructureProfile = (doc) => {
  const postObjects = doc.data();
  const postUsername = postObjects.username;
  const postTxt = postObjects.text;
  const postLikes = postObjects.likes;
  const idPostObject = doc.id;
  const dateObj = postObjects.dateTime.toDate();
  const postsDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  const userUid = localStorage.getItem('uid'); // usuario conectado
  console.log(userUid);
  const usersUidPost = postObjects.likes;
  const postUid = postObjects.uid;

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
  postCountedLikes.innerHTML = `Likes: ${usersUidPost.length}`;
  const postButtonsContainer = document.createElement('div');// donde se visualizaran los post los post
  postButtonsContainer.classList.add('postButtonsContainer');
  const editBtn = document.createElement('button');
  editBtn.classList.add('editButton');
  editBtn.setAttribute('id', 'editButton1');
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

  document.getElementById('postsContainerProfile').appendChild(modalEditText);

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
  deleteBtn.setAttribute('id', 'deleteButton1');
  deleteBtn.textContent = 'Delete';
  // Estructura modal boton delete
  const modalDeleteText = document.createElement('div');
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

  document.getElementById('postsContainerProfile').appendChild(modalDeleteText);

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
  postButtonsContainer.appendChild(editBtn);
  postButtonsContainer.appendChild(deleteBtn);

  postMold.appendChild(usernameContainer);
  postMold.appendChild(dateContainer);
  postMold.appendChild(postContentContainer);
  postMold.appendChild(previousPostsLikes);
  postMold.appendChild(postButtonsContainer);
  document.getElementById('postsContainerProfile').appendChild(postMold);
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, ' => ', doc.data());
};
