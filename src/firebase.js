import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx2RY5NGfkJU3likSCNNHjM-MtikvxNKY",
    authDomain: "clone-e3a8b.firebaseapp.com",
    projectId: "clone-e3a8b",
    storageBucket: "clone-e3a8b.appspot.com",
    messagingSenderId: "624330416661",
    appId: "1:624330416661:web:738c0798cae2408cb8a41c",
    measurementId: "G-KFGZ88LHLF"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth};