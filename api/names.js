export default async function handler(req,res){

try{

const { prompt } = req.body;

const response =
await fetch(
"https://api.openai.com/v1/chat/completions",
{

method:"POST",

headers:{
"Authorization":
`Bearer ${process.env.OPENAI_API_KEY}`,
"Content-Type":"application/json"
},

body: JSON.stringify({

model:"gpt-4.1-mini",

messages:[

{
role:"user",

content:
`اعطني 10 أسماء احترافية لمشروع:
${prompt}

الأسماء تكون قصيرة وسهلة.`

}

]

})

});

const data =
await response.json();

res.status(200).json({

result:
data.choices[0].message.content

});

}

catch(err){

res.status(500).json({

error:"names failed"

});

}

}
