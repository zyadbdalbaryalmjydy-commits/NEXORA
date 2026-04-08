// firebase.js

// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// إعدادات Firebase (الخاصة بك)
const firebaseConfig = {

  apiKey: "AIzaSyBYEIxaoS1RbUCxqgj5g5rbpKZe1ddd80o",

  authDomain: "nexora-1c66b.firebaseapp.com",

  projectId: "nexora-1c66b",

  storageBucket: "nexora-1c66b.firebasestorage.app",

  messagingSenderId: "964700323381",

  appId: "1:964700323381:web:5826dd261cb062f401fb7c"

};


// تشغيل Firebase
const app = initializeApp(firebaseConfig);


// تشغيل Authentication
export const auth = getAuth(app);


// تشغيل Firestore
export const db = getFirestore(app);
