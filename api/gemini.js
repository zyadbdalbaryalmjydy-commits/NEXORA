export default async function handler(req,res){

const { idea } = JSON.parse(req.body);

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
contents:[{
parts:[{text:`حلل هذه الفكرة: ${idea}`}]
}]
})
});

const data = await response.json();

res.status(200).json({
result:data.candidates?.[0]?.content?.parts?.[0]?.text || "خطأ"
});

}
