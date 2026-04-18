import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {

apiKey: process.env.FIREBASE_API_KEY,
authDomain: "nexora-1c66b.firebaseapp.com",
projectId: "nexora-1c66b",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req,res){

try {

const { project } = req.body;

const snapshot = await getDocs(collection(db,"projects"));

snapshot.forEach(async (d)=>{

if(d.data().project === project){

await deleteDoc(doc(db,"projects",d.id));

}

});

res.status(200).json({

success:true

});

}

catch(err){

res.status(500).json({

error:"delete failed"

});

}

}
