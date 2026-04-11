export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).json({
error: "Method not allowed"
});

}

try {

const { prompt } = req.body;

return res.status(200).json({

logo: `🎨 شعار تجريبي لـ:
${prompt}

(سيتم توليد شعار حقيقي قريبًا)`,

});

}

catch (error) {

return res.status(500).json({
error: "Server error"
});

}

}
