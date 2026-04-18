import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {

apiKey: process.env.FIREBASE_API_KEY,
authDomain: "nexora-1c66b.firebaseapp.com",
projectId: "nexora-1c66b",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req,res){

try {

const snapshot = await getDocs(collection(db,"projects"));

const projects = [];

snapshot.forEach(doc=>{

projects.push(doc.data());

});

res.status(200).json({ projects });

}

catch(err){

res.status(500).json({

error:"fetch failed"

});

}

}
