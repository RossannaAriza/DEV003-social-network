import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const dataBaseFirestore = getFirestore();

export { database, auth, dataBaseFirestore };