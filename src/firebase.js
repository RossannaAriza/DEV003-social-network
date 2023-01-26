// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase , set, ref, update} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB1J92DpSTCq8e615N8wr3-BchbG76QyUc",
   authDomain: "social-network-41ddd.firebaseapp.com",
   databaseURL: "https://social-network-41ddd-default-rtdb.firebaseio.com",
   projectId: "social-network-41ddd",
   storageBucket: "social-network-41ddd.appspot.com",
   messagingSenderId: "948862973616",
   appId: "1:948862973616:web:74ff33512154d5ff9b2d75",
   measurementId: "G-ENM9G4585Z"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth()
//  const analytics = getAnalytics(app);

  export function createAccountFunction (e) {

   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var username = document.getElementById('username').value;

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) =>{
   //   signed in
     const user = userCredential.user;

   // valida que el correo sea valido de lo contrario da error de autenticacion.
     set(ref(database, 'users/' + user.uid),{
       username: username,
       email: email
     })
     alert('user created');
     //..
   })
   .catch((error) =>{
     const errorCode = error.code;
     const errorMessage = error.message;

     alert(errorMessage);
   });

 };

 export function loginAccountFunction(e) {
   var EmailLogin = document.getElementById('EmailLogin').value;
   var PasswordLogin = document.getElementById('PasswordLogIn').value;

      signInWithEmailAndPassword(auth, EmailLogin, PasswordLogin)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;

        const dt = new Date();
         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })

         alert('User loged in!');
        //...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 };

 //const user = auth.currentUser;
//onAuthStateChanged(auth, (user) => {
 //if (user) {
   // User is signed in, see docs for a list of available properties
   // https://firebase.google.com/docs/reference/js/firebase.User
  // const uid = user.uid;
   //bla bla bla
   // ...
 //} else {
   // User is signed out
   // ...
   //bla bla bla
 //}
//});

/*logout.addEventListener('click',(e)=>{

   signOut(auth).then(() => {
     // Sign-out successful.
     alert('user loged out');
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });

});*/
