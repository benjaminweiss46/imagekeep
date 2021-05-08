import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
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
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = projectFirestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await projectFirestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, auth, timestamp, signInWithGoogle, generateUserDocument };