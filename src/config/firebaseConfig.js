import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;
