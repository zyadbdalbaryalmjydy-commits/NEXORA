import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {

apiKey: process.env.FIREBASE_API_KEY,
authDomain: "nexora-1c66b.firebaseapp.com",
projectId: "nexora-1c66b",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req,res){

try {

const { project, userId } = req.body;

await addDoc(collection(db,"projects"),{

project,
userId,
createdAt: new Date()

});

res.status(200).json({

success:true

});

}

catch(err){

res.status(500).json({

error:"save failed"

});

}

}
