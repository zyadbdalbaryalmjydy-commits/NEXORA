export default async function handler(req, res) {
  try {
    const { idea } = req.body;

    if (!idea) {
      return res.status(400).json({ error: "No idea" });
    }

    // 🔵 ChatGPT
    const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `أنشئ خطة مشروع كاملة لهذه الفكرة:\n${idea}`
          }
        ]
      })
    });

    const gptData = await gptRes.json();

    const gptText =
      gptData?.choices?.[0]?.message?.content ||
      "❌ GPT فشل";

    // 🟣 Gemini
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `حلل هذه الفكرة وطورها:\n${idea}`
                }
              ]
            }
          ]
        })
      }
    );

    const geminiData = await geminiRes.json();

    const geminiText =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "❌ Gemini فشل";

    // 🔥 الدمج النهائي
    const finalResult = `
🚀 خطة المشروع (ChatGPT):
${gptText}

----------------------------------

🧠 التحليل والتطوير (Gemini):
${geminiText}
`;

    res.status(200).json({ result: finalResult });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hybrid AI failed" });
  }
}
