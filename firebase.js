// Firebase Setup

import {
initializeApp
}
from
"https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
}
from
"https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";



// Firebase Config

const firebaseConfig = {

apiKey: "AIzaSyBYEIxaoS1RbUCxqgj5g5rbpKZe1ddd80o",

authDomain: "nexora-1c66b.firebaseapp.com",

projectId: "nexora-1c66b",

storageBucket: "nexora-1c66b.firebasestorage.app",

messagingSenderId: "964700323381",

appId: "1:964700323381:web:5826dd261cb062f401fb7c"

};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export {

db,
collection,
addDoc,
getDocs

};
