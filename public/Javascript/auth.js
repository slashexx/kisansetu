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

function emailSignUpHandler(auth, email, password, name, occupation, state, phoneNo, aadhar) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // Add user details to Firestore based on occupation
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                occupation: occupation,
                state: state,
                phoneNo: phoneNo,
                aadhar: aadhar,
                email: email,
                uid: user.uid
            });

            // Store user data in local storage
            localStorage.setItem('uid', user.uid);
            console.log(`Stored uid : ${user.uid}`)
            console.log(`Stored uid : ${user.uid}`)
            console.log(`Stored uid : ${user.uid}`)
            console.log(`Stored uid : ${user.uid}`)
            console.log(`Stored uid : ${user.uid}`)
            // alert("Details noted !");
            window.location.href = "/dashboard.html";
        })
        .catch((error) => {
            console.error("Error during sign-up:", error.message);
        });
}

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const state = document.getElementById('state').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const aadhar = document.getElementById('aadhar').value;
    const messageElement = document.getElementById('message');

    emailSignUpHandler(auth, email, password, name, occupation, state, phoneNo, aadhar)
        .then(() => {
            messageElement.textContent = 'Signup successful!';
            messageElement.style.color = 'green';
        })
        .catch(error => {
            messageElement.textContent = `Error: ${error.message}`;
            messageElement.style.color = 'red';
        });
});
