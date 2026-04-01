import { db, collection, addDoc, getDocs } from "./firebase.js";


// 🔥 توليد خطة مشروع

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

await saveProject(idea, data.result);

}

catch (error) {

alert("❌ خطأ في توليد الخطة");

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

loadProjects();

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

if (!list) return;

list.innerHTML = "";

querySnapshot.forEach((doc) => {

let data = doc.data();

let item = document.createElement("div");

item.innerHTML = `

<div style="background:white;color:black;padding:10px;margin:10px;border-radius:10px;">

<h3>${data.name}</h3>

<p>${data.content.substring(0,100)}...</p>

</div>

`;

list.appendChild(item);

});

}



// 🎨 شعار

function generateLogo() {

alert("🎨 سيتم توليد شعار قريبًا");

}



// 🌐 موقع

function buildWebsite() {

alert("🌐 سيتم إنشاء موقع قريبًا");

}



// 🚀 إطلاق

function launchProject() {

alert("🚀 سيتم إطلاق المشروع قريبًا");

}



// 🔥 الحل المهم: ربط الأزرار بالنافذة

window.generatePlan = generatePlan;
window.generateLogo = generateLogo;
window.buildWebsite = buildWebsite;
window.launchProject = launchProject;



// تحميل المشاريع

window.onload = function () {

loadProjects();

};
