import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWxRqaFUCepwkuksf6I_jjokpP2r6k7R0",
  authDomain: "wave-db-a9488.firebaseapp.com",
  projectId: "wave-db-a9488",
  storageBucket: "wave-db-a9488.appspot.com",
  messagingSenderId: "840402369008",
  appId: "1:840402369008:web:33d8c5ba3f572fedd1c535",
  measurementId: "G-51F0T8SYCH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: "select_amount"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
