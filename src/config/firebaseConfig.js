import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyA9pHIJniAp8OkqezehQgE2wUIn3BED9ZE",
    authDomain: "todo-18de4.firebaseapp.com",
    projectId: "todo-18de4",
    storageBucket: "todo-18de4.appspot.com",
    messagingSenderId: "904604906351",
    appId: "1:904604906351:web:2399f79d7dad0f73fdee9a"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;