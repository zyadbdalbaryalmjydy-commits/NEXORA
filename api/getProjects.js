import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req,res){

const snapshot = await getDocs(collection(db,"projects"));

let projects=[];

snapshot.forEach(doc=>{
  projects.push(doc.data());
});

res.status(200).json({projects});

}
