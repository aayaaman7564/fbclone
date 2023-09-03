// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1buF8e8q3mstNCekzcQMXIUgFrM7akVA",
  authDomain: "fbclone-1dc2b.firebaseapp.com",
  databaseURl: "https://fbclone-1dc2b.firebaseio.com",
  projectId: "fbclone-1dc2b",
  storageBucket: "fbclone-1dc2b.appspot.com",
  messagingSenderId: "707020318697",
  appId: "1:707020318697:web:8534ada0cbc95a74ebcd78",
  measurementId: "G-2C2N1TKM9T"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;