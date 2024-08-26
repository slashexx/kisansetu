import { auth, createUserWithEmailAndPassword } from "../firebase";  
import { db, doc, setDoc } from "../firebase";  

function emailSignUpHandler(auth, email, password, name, occupation, state, phoneNo, aadhar) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;

        // Add user details to Firestore based on occupation

        if(occupation=="Farmer"){
        await setDoc(doc(db, "farmers", user.uid), {
            name: name,
            occupation: occupation,
            state: state,
            phoneNo: phoneNo,
            aadhar: aadhar,
            email: email,
            uid: user.uid
        });
    } else if (occupation=="Buyer"){
        await setDoc(doc(db, "buyers", user.uid), {
            name: name,
            occupation: occupation,
            state: state,
            phoneNo: phoneNo,
            aadhar: aadhar,
            email: email,
            uid: user.uid
        });
    }

        console.log("User details added to Firestore");

        window.location.href = "/dashboard";
    })
    .catch((error) => {
        console.error("Error during sign-up:", error.message);
    });
}

export { emailSignUpHandler };
