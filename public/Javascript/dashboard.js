import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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



// document.getElementById('logout-button').addEventListener('click', logout);

function displayUserDetails() {
    const uid = localStorage.getItem('uid');
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)
    console.log(`Stored uid : ${uid}`)

    if (uid) {
        const userDocRef = doc(db, "users", uid);

        getDoc(userDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                // document.getElementById('userName').innerText = userData.name;
                document.querySelectorAll('#userName')[0].innerText = userData.name;
                document.querySelectorAll('#userName')[1].innerText = userData.name;
                document.getElementById('userOccupation').innerText = userData.occupation;
                document.getElementById('userState').innerText = userData.state;
                document.getElementById('userPhoneNo').innerText = userData.phoneNo;
                document.getElementById('userAadhar').innerText = userData.aadhar;
                document.getElementById('userEmail').innerText = userData.email;
                document.getElementById("userImage").src = userData.image;
            } else {
                alert("You need to signup first ! Redirecting...");
                window.location.href = '/signup';
            }
        }).catch((error) => {
            console.error("Error getting document:", error);
        });
    } else {
        console.log("No UID found in localStorage.");
    }
}

// Call displayUserDetails when the page loads
window.onload = displayUserDetails;
