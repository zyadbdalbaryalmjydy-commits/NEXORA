import { initializeApp } from "firebase/app";

import {
getFirestore,
collection,
addDoc
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

if (req.method !== "POST") {

return res.status(405).json({
error:"Method not allowed"
});

}

const { project, userId } =
req.body;

await addDoc(
collection(db,"projects"),
{

project,
userId,
createdAt:new Date()

}
);

res.status(200).json({

success:true

});

}

catch(error){

console.log(error);

res.status(500).json({

error:"Save failed"

});

}

}
