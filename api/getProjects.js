import { initializeApp } from "firebase/app";

import {
getFirestore,
collection,
getDocs
} from "firebase/firestore";

let app;

if (!global.firebaseApp) {

global.firebaseApp =
initializeApp({

apiKey: process.env.FIREBASE_API_KEY,

authDomain:
"nexora-1c66b.firebaseapp.com",

projectId:
"nexora-1c66b"

});

}

app = global.firebaseApp;

const db =
getFirestore(app);

export default async function handler(req,res){

try{

const snapshot =
await getDocs(
collection(db,"projects")
);

const projects=[];

snapshot.forEach(doc=>{

projects.push(doc.data());

});

res.status(200).json({

projects

});

}

catch(error){

console.log(error);

res.status(500).json({

error:"Get failed"

});

}

}
