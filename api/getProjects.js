import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const app = initializeApp({
apiKey: process.env.FIREBASE_API_KEY,
authDomain:"nexora-1c66b.firebaseapp.com",
projectId:"nexora-1c66b"
});

const db = getFirestore(app);

export default async function handler(req,res){

const snapshot = await getDocs(collection(db,"projects"));

let projects=[];

snapshot.forEach(doc=>{
projects.push(doc.data());
});

res.status(200).json({projects});
}
