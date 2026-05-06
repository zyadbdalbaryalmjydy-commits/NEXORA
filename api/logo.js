export default async function handler(req, res) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "No name" });
    }

    const imageUrl = `https://dummyimage.com/512x512/6366f1/ffffff&text=${encodeURIComponent(name)}`;

    res.status(200).json({
      logo: imageUrl
    });

  } catch (err) {
    res.status(500).json({ error: "Logo failed" });
  }
}
