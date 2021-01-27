import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBXyw8yv9fn4p1S5VFpAA6NlsM8J6lAjy4",
  authDomain: "crwn-db-5a398.firebaseapp.com",
  projectId: "crwn-db-5a398",
  storageBucket: "crwn-db-5a398.appspot.com",
  messagingSenderId: "714884227462",
  appId: "1:714884227462:web:3a15eb0ee373434783cc07",
  measurementId: "G-6LGJR93M9V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;