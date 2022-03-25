const express=require("express");

const router=express.Router();
const Post=require('../models//post.model');
const authenticate=require("../middlewares/authenticate")

const authorise=require("../middlewares/authorise")

router.get("",async(req,res)=>{
    try {

        const post=await Post.find().lean().exec();
       return res.status(201).send({post})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})



router.post("",authenticate,authorise(["seller","admin"]),async(req,res)=>{

    req.body.user_id=req.user._id
    try {
        const post=await Post.create(req.body)

        return res.send({post})
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
})

router.delete('/:id',authenticate, async(req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        return res.status(200).send({post});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

router.patch('/:id',authenticate, async(req, res) => {
    try {
        
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(200).send({post});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports=router