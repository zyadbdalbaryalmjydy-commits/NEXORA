let projects = [];

export default async function handler(req,res){

const { project } =
req.body;

projects =
projects.filter(
p=>p!==project
);

res.status(200).json({

success:true

});

}
