import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNnWOORFSps6xI4v2MomyMo4cVaRcNz3o",
    authDomain: "data-imagekeep.firebaseapp.com",
    projectId: "data-imagekeep",
    storageBucket: "data-imagekeep.appspot.com",
    messagingSenderId: "589182614049",
    appId: "1:589182614049:web:de6ed6f435dfed65f80160"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };