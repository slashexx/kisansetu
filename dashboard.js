import { auth } from "./firebase";  
import { db, doc, getDoc } from "./firebase"; 


function displayUserDetails() {
    const user = auth.currentUser;

    if (user) {
        const userDocRef = doc(db, "users", user.uid);
        
        getDoc(userDocRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                document.getElementById('userName').innerText = userData.name;
                document.getElementById('userOccupation').innerText = userData.occupation;
                document.getElementById('userState').innerText = userData.state;
                document.getElementById('userPhoneNo').innerText = userData.phoneNo;
                document.getElementById('userAadhar').innerText = userData.aadhar;
                document.getElementById('userEmail').innerText = userData.email;
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.error("Error getting document:", error);
        });
    } else {
        // If no user is signed in, redirect to login page
        window.location.href = "/login";
    }
}

// Call displayUserDetails when the page loads
window.onload = displayUserDetails;
