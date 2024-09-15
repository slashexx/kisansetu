import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNrhwRH5TeqAPyXmToaCGJ6St4g1FKOno",
    authDomain: "kisansetu-1640.firebaseapp.com",
    projectId: "kisansetu-1640",
    storageBucket: "kisansetu-1640.appspot.com",
    messagingSenderId: "763552320675",
    appId: "1:763552320675:web:93cff2382387b7b5dc4316"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById('details-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const uid = localStorage.getItem('uid'); // Retrieve UID from local storage
    if (!uid) {
        alert("User is not authenticated!");
        return;
    }

    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const cropsGrown = document.getElementById('cropsGrown').value.split(',').map(crop => crop.trim());
    const postalCode = document.getElementById('postalCode').value;
    const address = document.getElementById('address').value;
    const aadhar = document.getElementById('aadhar').value;
    const amountProduced = document.getElementById('amountProduced').value;
    const imageFile = document.getElementById('image').files[0];
    const occupation = document.getElementById('occupation').value;
    const phone = document.getElementById('phoneNumber').value;
    
    const accountNo = document.getElementById('accountNo').value;
    const ifsc = document.getElementById('ifsc').value;
    const accountHolderName = document.getElementById('accountHolderName').value;
    if(occupation=='Farmer'){
        localStorage.setItem('isFarmer',true)
    }else{
        localStorage.setItem('isFarmer',false)
    }

    try {
        // Upload image to Firebase Storage and get URL
        const imageRef = ref(storage, `images/${uid}.jpg`);
        await uploadBytes(imageRef, imageFile);
        const imageURL = await getDownloadURL(imageRef);

        // Store user details in Firestore
        await setDoc(doc(db, "users", uid), {
            name: name,
            state: state,
            cropsGrown: cropsGrown,
            postalCode: postalCode,
            address: address,
            aadhar: aadhar,
            amountProduced: amountProduced,
            image: imageURL,
            occupation: occupation,  // Storing occupation
            governmentVerified: true,
            uid: uid,
            phoneNo: phone,
            accountNo: accountNo,
            ifsc: ifsc,
            accountHolderName: accountHolderName
        });

        alert("Details submitted successfully!");
        fetch('/add-user', {
            method: 'POST', // Define the method as POST
            headers: {
              'Content-Type': 'application/json' // Indicate that you're sending JSON
            },
            body: JSON.stringify({name,occupation,uid,cropsGrown,postalCode,address,imageURL,state,amountProduced,"governmentVerified":false}) // Convert the data object to a JSON string
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response from the server
          })
          .then(responseData => {
            console.log('Success:', responseData); // Handle the response data
          })
          .catch(error => {
            console.error('Error:', error); // Handle any errors
          });
        window.location.href = "/dashboard.html";
    } catch (error) {
        console.error("Error submitting details:", error);
        document.getElementById('message').textContent = `Error: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    }
});
