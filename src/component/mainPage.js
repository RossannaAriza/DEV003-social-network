// import { doc } from 'firebase/firestore';
import { logOut, createPost, passProfile, recoverDataSearch, changeLikes } from '../firebase';
// import { recoverData } from './firebase.js';

const postsContainer = document.createElement('div');
postsContainer.classList.add('postsContainer');
postsContainer.setAttribute('id', 'postsContainer');
const handleCreatePost = () => {
  const postContent = document.getElementById('postTextArea');
  const getUsername = localStorage.getItem('username');
  const uid = localStorage.getItem('uid');
  const uidLike = [];
  createPost(getUsername, postContent.value, uid, uidLike);
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
  inputSearchProfile.setAttribute('id', 'inputSearchProfile');
  inputSearchProfile.placeholder = 'Search User';
  const searchButton = document.createElement('button');
  searchButton.classList.add('searchButton');
  searchButton.addEventListener('click', recoverDataSearch);
  const profileButton = document.createElement('button');
  profileButton.classList.add('profileButton');
  profileButton.onclick = passProfile;
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
  const usersUidPost = postObjects.likes;
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

  usernameContainer.appendChild(username);
  dateContainer.appendChild(postDate);
  postContentContainer.appendChild(postTextContent);
  previousPostsLikes.appendChild(postCountedLikes);
  counterContainer.appendChild(likeCounterSpan);
  likeBtnContainer.appendChild(counterContainer);
  likeBtnContainer.appendChild(likesBtn);
  postButtonsContainer.appendChild(likeBtnContainer);

  postMold.appendChild(usernameContainer);
  postMold.appendChild(dateContainer);
  postMold.appendChild(postContentContainer);
  postMold.appendChild(previousPostsLikes);
  postMold.appendChild(postButtonsContainer);
  postsContainer.appendChild(postMold);
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, ' => ', doc.data());

  // Function dar like

  likesBtn.onclick = function likeCounter(doc) {

  //   for (let index = 0; index < usersUidPost.length; index++) {
    // usersUidPost.push(userUid);
      const likesLength = usersUidPost.length;
      // console.log(likesLength);
      // console.log(usersUidPost);

      if (usersUidPost.includes(userUid)) {
        const index = usersUidPost.indexOf(userUid);
        usersUidPost.splice(index, 1); 
        console.log(usersUidPost);
        console.log("quita");
      } else{
        usersUidPost.push(userUid);
        console.log(usersUidPost);
        console.log("agrega");
      }



  //   //   console.log(usersUidPost);
  //   //   console.log(userUid);
  //   //   console.log(typeof removeUidLikes);
  //   if (usersUidPost === userUid) {
  //     removeUidLikes(idPostObject, userUid);
  //        console.log('Son iguales');
  //   //   const newPostLikes = postLikes-1;
  //   //   changeLikes(idPostObject, newPostLikes);
  //   //   removeUidLikes(idPostObject, userUid);
  //   } else {
  //     // addUidLikes(idPostObject, userUid, likesLength+1);
  //     console.log('Son diferentes');
  //     }
  //     // changeLikes(idPostObject, likesLength);
  //   };
  };
}
