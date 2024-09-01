import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

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
