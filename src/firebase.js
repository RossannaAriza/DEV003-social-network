// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  signInWithPopup, GoogleAuthProvider, /* signInWithRedirect, */ sendEmailVerification,
} from 'firebase/auth';
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import {
  getDatabase, set, ref, update,
} from 'firebase/database';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { onNavigate } from './lib/index';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyB1J92DpSTCq8e615N8wr3-BchbG76QyUc',
  authDomain: 'social-network-41ddd.firebaseapp.com',
  databaseURL: 'https://social-network-41ddd-default-rtdb.firebaseio.com',
  projectId: 'social-network-41ddd',
  storageBucket: 'social-network-41ddd.appspot.com',
  messagingSenderId: '948862973616',
  appId: '1:948862973616:web:74ff33512154d5ff9b2d75',
  measurementId: 'G-ENM9G4585Z',
});
const database = getDatabase(app);
const auth = getAuth();
const dataBaseFirestore = getFirestore();
//  const analytics = getAnalytics(app);

// verificacion de correo con email
function emailVerification() {
  sendEmailVerification(auth.currentUser)
    .then(() => {
    // Email verification sent!
    // ...
    });
}

export function createAccountFunction() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {
      //   signed in
      const user = userCredential.user;

      // valida que el correo sea valido de lo contrario da error de autenticacion.
      set(ref(database, `users/${user.uid}`), {
        username,
        email,
      });
      alert('user created');

      const getUsername = document.getElementById('username').value;
      console.log(getUsername);
      localStorage.setItem('username', getUsername);

      // const getUserMail = document.getElementById('email').value;
      // console.log(getUserMail);
      // localStorage.setItem('username', getUserMail);

      onNavigate('/mainPage');
      emailVerification();
      onAuthStateChanged(auth, (user1) => {
        if (user1) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user1.uid;
          console.log(`Validación de log in: ${uid}`);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      // ..
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;

      alert('Something went wrong with your e-mail or password');
    });
}

export function loginAccountFunction() {
  const EmailLogin = document.getElementById('EmailLogin').value;
  const PasswordLogin = document.getElementById('PasswordLogIn').value;
  const username = document.getElementById('username').value;

  signInWithEmailAndPassword(auth, EmailLogin, PasswordLogin, username)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, `users/${user.uid}`), {
        last_login: dt,
      });
      console.log(username);
      localStorage.setItem('username', username);

      alert('User loged in!');
      onNavigate('/mainPage');
      onAuthStateChanged(auth, (user2) => {
        if (user2) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user2);
          const uid = user2.uid;
          console.log(`Validación de log in: ${uid}`);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}
export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then((result) => {
    // alert("Funciona");
    const user = result.user.displayName;
    console.log(user);
    localStorage.setItem('username', user);

    onNavigate('/mainPage');
    console.log('Usuario se loggeo correctamente');
    console.log(result);
    onAuthStateChanged(auth, (user2) => {
      if (user2) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user2.uid;
        console.log(`Validación Log in with google: ${uid}`);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    // ...
  }).catch((error) => {
    alert(errorMessage);
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

// const user = auth.currentUser;
// onAuthStateChanged(auth, (user) => {
// if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
// const uid = user.uid;
// bla bla bla
// ...
// } else {
// User is signed out
// ...
// bla bla bla
// }
// });

/* logout.addEventListener('click',(e)=>{ */
export function logOut(name) {
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('You are loggin out');

    localStorage.removeItem('username', name);

    onNavigate('/');
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });
}

// funcion agregar datos en firestore
const publicationsAll = doc(dataBaseFirestore, 'publications/publication');
/*export async function createPost(username, text) {
  const postData = {
    dateTime: new Date(),
    likes: 0,
    username, // cuando key y value tengan el mismo valor puedes poner el nombre y ,
    text,
  };
  setDoc(publicationsAll, postData, { merge: true });
  .then(() => {
    console.log('This value has been written to the database');
  })
  .catch((error) => {
    console.log(`I got an error! ${error}`);
  });  
  console.log(postData);
}*/

export async function createPost(username, text) {
  const postData = {
    dateTime: new Date(),
    likes: 0,
    username, // cuando key y value tengan el mismo valor puedes poner el nombre y ,
    text,
  };
  await setDoc(publicationsAll, postData, { merge: true });
  console.log('This value has been written to the database');
}

/* export async function createPost(username, text) {
  const postData = {
    dateTime: new Date(),
    likes: 0,
    username, // cuando key y value tengan el mismo valor puedes poner el nombre y ,
    text,
  };
  try{ await setDoc(publicationsAll, postData, { merge: true });
  console.log('This value has been written to the database');
  } catch (error){
    console.log(`I got an error! ${error}`);
  }
} */
