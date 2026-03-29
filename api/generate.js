export default async function handler(req, res) {
  try {
    // تحقق من طريقة الطلب (POST فقط)
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const { idea } = req.body;

    if (!idea) {
      return res.status(400).json({ error: "No idea provided" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Create a professional startup plan for: ${idea}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices.length) {
      return res.status(500).json({ error: "AI returned no choices", data });
    }

    // إرسال نتيجة واضحة للـ frontend
    res.status(200).json({
      success: true,
      result: data.choices[0].message?.content || "No content returned",
    });

  } catch (error) {
    res.status(500).json({
      error: "Server error",
      details: error.message,
    });
  }
}
