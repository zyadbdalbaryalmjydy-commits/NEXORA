export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).json({
error: "Method not allowed"
});

}

try {

const { prompt, type } = req.body;

if (!prompt) {

return res.status(400).json({
error: "No prompt provided"
});

}


// خطة مشروع تجريبية

const result = `

🚀 خطة مشروع لفكرة:

"${prompt}"

📌 المرحلة 1: دراسة الفكرة
- تحديد الهدف
- تحليل السوق
- تحديد الجمهور

📌 المرحلة 2: التصميم
- تصميم الواجهة
- تحديد المميزات
- رسم نموذج أولي

📌 المرحلة 3: التطوير
- بناء النظام
- اختبار الأداء
- إصلاح الأخطاء

📌 المرحلة 4: الإطلاق
- نشر المشروع
- التسويق
- جمع آراء المستخدمين

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
