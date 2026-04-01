// استيراد Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,

collection,

addDoc,

getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// ⚠️ ضع بيانات Firebase الخاصة بك هنا

const firebaseConfig = {

apiKey: "PUT_API_KEY_HERE",

authDomain: "PUT_PROJECT_ID.firebaseapp.com",

projectId: "PUT_PROJECT_ID",

storageBucket: "PUT_PROJECT_ID.appspot.com",

messagingSenderId: "PUT_SENDER_ID",

appId: "PUT_APP_ID"

};



// تشغيل Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



// تصدير للاستخدام

export {

db,

collection,

addDoc,

getDocs

};
