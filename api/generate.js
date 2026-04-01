export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({
error: "Method not allowed"
});
}

try {

const { prompt } = req.body;

return res.status(200).json({

result: `🚀 خطة مشروع تجريبية:

الفكرة:
${prompt}

نموذج العمل:
اشتراك شهري

خطة الربح:
بيع خدمات رقمية

خطوات الإطلاق:
1- إنشاء MVP
2- تجربة المستخدمين
3- إطلاق رسمي

`

});

}

catch (error) {

return res.status(500).json({
error: "Server error"
});

}

}
