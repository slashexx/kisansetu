import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAd2l0U5sRkdDvKTgbBEZdWKl_RF1JfmxY",
  authDomain: "kisansetu-346a8.firebaseapp.com",
  projectId: "kisansetu-346a8",
  storageBucket: "kisansetu-346a8.appspot.com",
  messagingSenderId: "103062134377",
  appId: "1:103062134377:web:466e64ef6631ee31f8ccf8",
  measurementId: "G-VEHLV1STRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const messageElement = document.getElementById('message');

function emailSignUpHandler(auth, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // Store user data in local storage
            localStorage.setItem('uid', user.uid);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);

            // Redirect to the registration form
            window.location.href = "/register";
        })
        .catch((error) => {
            messageElement.textContent = `Error: ${error.message}`;
            messageElement.style.color = 'red';
        });
}

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    emailSignUpHandler(auth, email, password)
        .then(() => {
            messageElement.textContent = 'Signup successful!';
            messageElement.style.color = 'green';
        })
        .catch(error => {
            messageElement.textContent = `Error: ${error.message}`;
            messageElement.style.color = 'red';
        });
});
