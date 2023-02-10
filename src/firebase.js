// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase, set, ref, update } from 'firebase/database';
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { onNavigate } from "./lib/index";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1J92DpSTCq8e615N8wr3-BchbG76QyUc',
  authDomain: 'social-network-41ddd.firebaseapp.com',
  databaseURL: 'https://social-network-41ddd-default-rtdb.firebaseio.com',
  projectId: 'social-network-41ddd',
  storageBucket: 'social-network-41ddd.appspot.com',
  messagingSenderId: '948862973616',
  appId: '1:948862973616:web:74ff33512154d5ff9b2d75',
  measurementId: 'G-ENM9G4585Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
//  const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

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
  
      const emailIsUsername = document.getElementById('email').value;
      console.log(emailIsUsername);
      localStorage.setItem('username', emailIsUsername);

      onNavigate('/mainPage');
      emailVerification();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log('Validación de log in: ' + uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
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
      // 
      const emailIsUsername = document.getElementById('EmailLogin').value;
      console.log(emailIsUsername);
      localStorage.setItem('username', emailIsUsername);

      alert('User loged in!');
      onNavigate('/mainPage')
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user);
          const uid = user.uid;
          console.log('Validación de log in: ' + uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
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
    
    onNavigate('/mainPage')
    console.log("Usuario se loggeo correctamente");
    console.log(result);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('Validación Log in with google: ' + uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    })

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

export function logOut(){
   signOut(auth).then(() => {
     // Sign-out successful.
     alert('You are loggin out');
     // Modificar para que username sea el correo del usuario
     localStorage.removeItem('username');
     

     onNavigate ('/')
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });

}
function emailVerification() {
  const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}
export function passwordResetEmail(){
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
}