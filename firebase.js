// Import the functions you need from the SDKs you need
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  signInWithPopup, GoogleAuthProvider, /* signInWithRedirect, */ sendEmailVerification, /* sendPasswordResetEmail, */
} from 'firebase/auth';
import { set, ref, update } from 'firebase/database';
import {
  where, collection, addDoc, getDocs, updateDoc, doc, query, orderBy, deleteDoc, arrayUnion, arrayRemove, onSnapshot,
} from 'firebase/firestore';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from './lib/index';
import { database, auth, dataBaseFirestore } from './firebaseInit';
import { murostructure } from './component/mainPage';


// verificacion de correo con email
function emailVerification() {
  sendEmailVerification(auth.currentUser);
}
// creacion de usuario
export function createAccountFunction() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = localStorage.getItem('username');
  
  return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    set(ref(database, `users/${user.uid}`), {
      username,
      email,
    });
    window.alert('user created');
    const settingUsername = document.getElementById('email').value.split('@')[0];
    localStorage.setItem('username', settingUsername);
    onNavigate('/mainPage');
    emailVerification();
    location.reload();
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        const uid = user1.uid;
        localStorage.setItem('uid', uid);
      } else {
        // User is signed out
      }})}).catch((error) => {
    window.alert('Something went wrong with your e-mail or password');
  });
}
// ingreso a interfaz
export function loginAccountFunction() {
  const EmailLogin = document.getElementById('EmailLogin').value;
  const PasswordLogin = document.getElementById('PasswordLogIn').value;
  return signInWithEmailAndPassword(auth, EmailLogin, PasswordLogin).then((userCredential) => {
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database, `users/${user.uid}`), {
      last_login: dt,
    });
    const settingUsername = document.getElementById('EmailLogin').value.split('@')[0];
    localStorage.setItem('username', settingUsername);
    window.alert('User loged in!');
    onNavigate('/mainPage');
    location.reload();
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        const uid = user1.uid;
        localStorage.setItem('uid', uid);
      } else {
        // User is signed out
      }})}).catch((error) => {
    window.alert('Something went wrong with your e-mail or password');
  });
}
// ingreso con google
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then((result) => {
    const settingUsername = result.user.email.split('@')[0];
    localStorage.setItem('username', settingUsername);
    onNavigate('/mainPage');
    console.log('Usuario se loggeo correctamente');
    console.log(result);
    alert('User loged in!');
    location.reload();
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        const uid = user1.uid;
        localStorage.setItem('uid', uid);
      } else {
        // User is signed out
      }})}).catch((error) => {
    window.alert(errorMessage);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
// cerrar session
export function logOut() {
  return signOut(auth).then(() => {
    alert('You are loggin out');
    // Modificar para que username sea el correo del usuario
    localStorage.removeItem('username');
    onNavigate('/');
    location.reload();
  }).catch((error) => {
    window.alert('Something is wrong');
  });
}
/* //funcion recuperar contraseña
export function passwordResetEmail() {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
    // Password reset email sent!
    // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
} */
// Funcion botones de menu de navegacion
export const passProfile = () => {
  onNavigate('/profile');
  location.reload();
};
export const backMenu = () => {
  onNavigate('/mainPage');
  location.reload();
};
// funcion agregar datos en firestore
export const createPost = (username, text, uid) => {
  addDoc(collection(dataBaseFirestore, "publications"), {
    dateTime: new Date(),
    likes: [],
    username,
    text,
    uid, 
  })};

// función regresar las publicaciones de firestore
export const recoverData = async (callback) => {
  const querySnapshot = await getDoc(query(collection(dataBaseFirestore, 'publications'), orderBy('dateTime', 'desc')), callback, {});
  return querySnapshot;
};
// función regresar las publicaciones de firestore en profile
export const recoverDataProfile = async() => {
  const querySnapshot = await getDocs(query(collection(dataBaseFirestore, 'publications'), where('uid', '==', localStorage.getItem('uid'))));
  return querySnapshot;
}
// funcion cargar datos actualizados
export const onGetRecoverData = async (callback) => {
  const getPots = await onSnapshot(query(collection(dataBaseFirestore, 'publications'), orderBy('dateTime', 'desc')), callback, {});
  return getPots;
};
// funcion cargar datos actualizados
export const onGetRecoverDataProfile = async (callback) => {
  const getPots = await onSnapshot(query(collection(dataBaseFirestore, 'publications'), where('uid', '==', localStorage.getItem('uid'))), callback, {});
  return getPots;
};
// funcion editar texto publicacion
export const editPost = async(idDoc, newText) => {
  const docRef = doc(dataBaseFirestore, "publications", idDoc);
  await updateDoc(docRef, {
    text: newText,
  });
}
// funcion eliminar texto publicacion
export  const deletePost = async(idDoc) => {
  await deleteDoc(doc(dataBaseFirestore, "publications", idDoc));
}
// función agregar likes en firestore
export const changeLikes = async(idDoc, likesLength) => {
  const docRef = doc(dataBaseFirestore, "publications", idDoc);
  await updateDoc(docRef, {
    likes: likesLength,
  });
}
// función agregar usuarios que dan likes en firestore
export const addUidLikes = async(idDoc, newUidLike) => {
  const docRef = doc(dataBaseFirestore, "publications", idDoc);
  await updateDoc(docRef, {
    uidLikes: arrayUnion(newUidLike),
  });
}
export const removeUidLikes = async(idDoc, newUidLike) => {
  const docRef = doc(dataBaseFirestore, "publications", idDoc);
  await updateDoc(docRef, {
    uidLikes: arrayRemove(newUidLike),
  });
}
// Funcion para el buscador
export const recoverDataSearch = async() => {
  const nameSearch = document.getElementById('inputSearchProfile').value;
  const querySnapshot = await getDocs(query(collection(dataBaseFirestore, 'publications'), where('username', '==', nameSearch)));
  document.getElementById('postsContainer').innerHTML = '';
  querySnapshot.forEach((doc) => {
    murostructure(doc);
  });
}
