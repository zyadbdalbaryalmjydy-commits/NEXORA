// زر توليد الشعار
const logoBtn = document.getElementById("generateLogo");

if (logoBtn) {
logoBtn.addEventListener("click", () => {

alert("🎨 سيتم إنشاء شعار قريبًا");

});
}



// زر توليد الخطة

const planBtn = document.getElementById("generatePlan");

if (planBtn) {

planBtn.addEventListener("click", async () => {

try {

// نص الفكرة

const ideaInput = document.getElementById("ideaInput");

const idea = ideaInput.value;



if (!idea) {

alert("اكتب فكرة المشروع أولاً");

return;

}



// إرسال الطلب إلى API

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

const resultBox = document.getElementById("result");

if (resultBox) {

resultBox.innerText = data.result;

}

}

catch (error) {

alert("حدث خطأ أثناء توليد الخطة");

console.error(error);

}

});

}
