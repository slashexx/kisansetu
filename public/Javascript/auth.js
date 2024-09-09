import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
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
const googleProvider = new GoogleAuthProvider();


function googleAuthHandler(){
    return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      localStorage.setItem('uid', user.uid);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);

            // Redirect to the registration form
            window.location.href = "/register";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
}

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

function emailSignInHandler(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      localStorage.setItem('uid', user.uid);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);
            console.log(`Stored uid: ${user.uid}`);

            // Redirect to the registration form
            window.location.href = "/dashboard";
      // ...
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

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    emailSignInHandler(auth, email, password)
        .then(() => {
            messageElement.textContent = 'Login successful!';
            messageElement.style.color = 'green';
        })
        .catch(error => {
            messageElement.textContent = `Error: ${error.message}`;
            messageElement.style.color = 'red';
        });
});

document.getElementById('google-sign-up').addEventListener('click', (e)=>{ 
    e.preventDefault();

    googleAuthHandler();
})
