// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
let firebaseApp;

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBQ0WyjnvthBb7rw2-Zm55KkS01wdUsxpg",
    authDomain: "login-page-6e696.firebaseapp.com",
    databaseURL: "https://login-page-6e696-default-rtdb.firebaseio.com",
    projectId: "login-page-6e696",
    storageBucket: "login-page-6e696.appspot.com",
    messagingSenderId: "1068439419704",
    appId: "1:1068439419704:web:db71a3ed604b726d199fcd",
    measurementId: "G-400HQQKN3V"
  });

 
const db = getFirestore();
export default db