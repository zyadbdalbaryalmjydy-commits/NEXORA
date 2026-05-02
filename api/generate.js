export default async function handler(req,res){

const { idea, type } = JSON.parse(req.body);

let prompt = "أنت خبير مشاريع. اكتب بشكل منظم.\n";

if(type==="ideas"){
prompt += `اعطني أفكار مشاريع حول: ${idea}`;
}else if(type==="names"){
prompt += `اعطني أسماء براند لهذا المشروع: ${idea}`;
}else{
prompt += `اكتب خطة مشروع كاملة لهذا: ${idea}`;
}

const response=await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"خبير مشاريع"},
{role:"user",content:prompt}
]
})
});

const data=await response.json();

res.status(200).json({
result:data.choices[0].message.content
});

}
