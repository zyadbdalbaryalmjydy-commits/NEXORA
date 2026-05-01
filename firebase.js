import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nexora-1c66b.firebaseapp.com",
  projectId: "nexora-1c66b"
});

export const db = getFirestore(app);
