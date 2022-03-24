const express=require("express");

const router=express.Router();
const User=require('../models/user.model')

router.get("",async(req,res)=>{
    try {

        const user=await User.find().lean().exec();
       return res.status(201).send({user})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})



router.post("",async(req,res)=>{
    try {
        
        const user=await User.create(req.body)

        return res.send(user)
    } catch (error) {
        return res.send(error.message)
    }
})




module.exports=router