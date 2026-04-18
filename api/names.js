export default async function handler(req, res) {

if (req.method !== "POST") {

return res.status(405).end();

}

try {

const { prompt } = req.body;

const response =
await fetch(

"https://api.openai.com/v1/chat/completions",

{

method: "POST",

headers: {

"Content-Type": "application/json",

"Authorization":
"Bearer " + process.env.OPENAI_API_KEY

},

body: JSON.stringify({

model: "gpt-4.1-mini",

messages: [

{

role: "system",

content:
"اقترح 5 أسماء احترافية لمشروع بناءً على الفكرة."

},

{

role: "user",

content: prompt

}

]

})

}

);

const data =
await response.json();

res.status(200).json({

names:
data.choices[0].message.content

});

}

catch (error) {

res.status(500).json({

error: "Server error"

});

}

}
