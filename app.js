import { db, collection, addDoc, getDocs } from "./firebase.js";


// 🔥 توليد خطة مشروع AI

async function generatePlan() {

let idea = prompt("اكتب فكرة المشروع:");

if (!idea) return;

try {

let res = await fetch("/api/generate", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({

prompt: `
Create a full business plan for:

${idea}

Include:

- Project Idea
- Business Model
- Revenue Plan
- Launch Steps

`

})

});

let data = await res.json();

alert(data.result);

// حفظ المشروع

saveProject(idea, data.result);

}

catch (error) {

alert("خطأ في توليد الخطة");

}

}



// 💾 حفظ المشروع

async function saveProject(name, content) {

try {

await addDoc(

collection(db, "projects"),

{

name: name,

content: content,

created: new Date()

}

);

alert("✅ تم حفظ المشروع");

}

catch (error) {

alert("❌ فشل حفظ المشروع");

}

}



// 📂 عرض المشاريع

async function loadProjects() {

const querySnapshot = await getDocs(

collection(db, "projects")

);

let list = document.getElementById("projectsList");

list.innerHTML = "";

querySnapshot.forEach((doc) => {

let data = doc.data();

let item = document.createElement("div");

item.innerHTML = `

<h3>${data.name}</h3>

<p>${data.content.substring(0,100)}...</p>

<hr>

`;

list.appendChild(item);

});

}



// 🎨 توليد شعار (مؤقت)

function generateLogo() {

let name = prompt("اكتب اسم الشركة:");

if (!name) return;

alert("🎨 سيتم توليد شعار قريبًا");

}



// 🌐 Build Website

function buildWebsite() {

let idea = prompt("اكتب فكرة الموقع:");

if (!idea) return;

alert("🌐 سيتم إنشاء موقع قريبًا");

}



// 🚀 Launch Project

function launchProject() {

alert("🚀 سيتم إطلاق المشروع قريبًا");

}



// تحميل المشاريع عند فتح الصفحة

window.onload = function () {

loadProjects();

};
