const { reject } = require('bcrypt/promises');
var jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
            if(err){
                return reject(err)
            }
            return resolve(decoded)
        });

    })


    }
const authenticate=async(req,res,next)=>{


    if(!req.headers.authorization){
        return res.status(400).send({message:"Authorization token not found or incorrect1"})
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message:"Auhorization token is not found or incorrect2"})
    }

    const token=req.headers.authorization.trim().split(" ")[1];

    let decoded;
    try{
        decoded=await verifyToken(token);

    }catch(err){
        return res.status(400).send({message:"Auhorization token is not found or incorrect3"})
    }
req.user=decoded.user
   return next()
}

module.exports=authenticate;