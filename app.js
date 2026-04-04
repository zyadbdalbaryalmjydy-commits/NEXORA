// التأكد أن الصفحة جاهزة

document.addEventListener("DOMContentLoaded", function () {

// زر توليد الخطة

const planBtn = document.getElementById("generatePlan");

if (planBtn) {

planBtn.addEventListener("click", async function () {

try {

const ideaInput = document.getElementById("ideaInput");

const resultBox = document.getElementById("result");



if (!ideaInput) {

alert("لم يتم العثور على مربع الفكرة");

return;

}



const idea = ideaInput.value;



if (!idea) {

alert("اكتب فكرة المشروع أولاً");

return;

}



// إرسال الطلب

const response = await fetch("/api/generate", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

prompt: idea

})

});



const data = await response.json();



// عرض النتيجة

if (resultBox) {

resultBox.innerText = data.result;

}

}

catch (error) {

alert("حدث خطأ أثناء توليد خطة");

console.error(error);

}

});

}



// زر توليد الشعار

const logoBtn = document.getElementById("generateLogo");

if (logoBtn) {

logoBtn.addEventListener("click", function () {

alert("🎨 سيتم إنشاء شعار قريبًا");

});

}

});
