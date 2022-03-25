



const authorise=(permittedRoles)=>{

    return (req,res,next)=>{
        let isPermitted=false;

        permittedRoles.map(role=>{
           if(req.user.role.includes(role)) {
               isPermitted=true
           }
        })

        if(isPermitted){
            return next();
        }
        else{
            return res.status(401).send({message:"You are not authorize to perform this operations"})
        }

    }



}



module.exports=authorise;