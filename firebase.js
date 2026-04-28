import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYEIxaoS1RbUCxqgj5g5rbpKZe1ddd80o",
  authDomain: "nexora-1c66b.firebaseapp.com",
  databaseURL: "https://nexora-1c66b-default-rtdb.firebaseio.com",
  projectId: "nexora-1c66b",
  storageBucket: "nexora-1c66b.firebasestorage.app",
  messagingSenderId: "964700323381",
  appId: "1:964700323381:web:5826dd261cb062f401fb7c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
