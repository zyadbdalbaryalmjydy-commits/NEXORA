let projects = [];

export default async function handler(req,res){

if(req.method==="POST"){

projects.push(req.body.project);

}

res.status(200).json({

success:true

});

}
