export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).json({
error: "Method not allowed"
});

}

try {

const { prompt } = req.body;


// توليد خطة مشروع

const result = `🚀 خطة مشروع:

📌 الفكرة:
${prompt}

🎯 الهدف:
إنشاء مشروع ناجح يعتمد على هذه الفكرة.

💰 نموذج الربح:
اشتراك شهري أو بيع خدمات.

📊 خطوات التنفيذ:

1️⃣ دراسة الفكرة والسوق  
2️⃣ إنشاء نموذج أولي MVP  
3️⃣ اختبار المستخدمين  
4️⃣ إطلاق المشروع رسمياً  

📢 نصيحة:
ابدأ بسيط ثم طور المشروع تدريجياً.

`;


return res.status(200).json({

result: result

});

}

catch (error) {

return res.status(500).json({
error: "Server error"
});

}

}
