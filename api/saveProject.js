import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const app = initializeApp({
apiKey: process.env.FIREBASE_API_KEY,
authDomain:"nexora-1c66b.firebaseapp.com",
projectId:"nexora-1c66b"
});

const db = getFirestore(app);

export default async function handler(req,res){

const { content } = JSON.parse(req.body);

await addDoc(collection(db,"projects"),{content});

res.status(200).json({ok:true});
}
