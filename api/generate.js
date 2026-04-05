export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).json({
error: "Method not allowed"
});

}

try {

const { prompt, type } = req.body;



// خطة مشروع

if (type === "plan") {

return res.status(200).json({

result:

`🚀 خطة مشروع:

📌 الفكرة:
${prompt}

💰 نموذج الربح:
اشتراك شهري

📊 الخطوات:

1- إنشاء MVP
2- اختبار المستخدمين
3- إطلاق رسمي

`

});

}



// شعار

if (type === "logo") {

return res.status(200).json({

result:
"🎨 سيتم إنشاء شعار AI قريبًا"

});

}



// موقع

if (type === "website") {

return res.status(200).json({

result:
"🌐 سيتم بناء موقع المشروع قريبًا"

});

}



return res.status(400).json({
error: "Unknown request"
});

}

catch (error) {

return res.status(500).json({
error: "Server error"
});

}

}
