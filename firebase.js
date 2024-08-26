// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNrhwRH5TeqAPyXmToaCGJ6St4g1FKOno",
  authDomain: "kisansetu-1640.firebaseapp.com",
  projectId: "kisansetu-1640",
  storageBucket: "kisansetu-1640.appspot.com",
  messagingSenderId: "763552320675",
  appId: "1:763552320675:web:93cff2382387b7b5dc4316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export { db, collection, addDoc, getDoc, getDocs, doc, setDoc }