// Firebase Config

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {

apiKey: "AIzaSyBYEIxaoS1RbUCxqgj5g5rbpKZe1ddd80o",

authDomain: "nexora-1c66b.firebaseapp.com",

projectId: "nexora-1c66b",

storageBucket: "nexora-1c66b.firebasestorage.app",

messagingSenderId: "964700323381",

appId: "1:964700323381:web:5826dd261cb062f401fb7c"

};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);



export { auth, db };
export { createUserWithEmailAndPassword };
export { signInWithEmailAndPassword };
export { collection, addDoc, getDocs };
