import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "nexora-1c66b.firebaseapp.com",

  projectId: "nexora-1c66b",

  storageBucket: "nexora-1c66b.appspot.com",

  messagingSenderId: "964700323381",

  appId: "1:964700323381:web:5826dd261cb062f401fb7c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
