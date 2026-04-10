export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).json({
error: "Method not allowed"
});

}

try {

const { name } = req.body;

// شعار تجريبي (نسخة أولى)

const logoUrl =
"https://dummyimage.com/300x150/2563eb/ffffff&text="
+ encodeURIComponent(name);

return res.status(200).json({

logo: logoUrl

});

}

catch (error) {

return res.status(500).json({
error: "Logo error"
});

}

}
