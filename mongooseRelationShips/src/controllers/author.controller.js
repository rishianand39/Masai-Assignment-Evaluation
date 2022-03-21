const express=require("express");
const router=express.Router()
const Author=require("../models/author.model")


router.post("/", async (req, res)=>{
    const author = await Author.create(req.body)

    return res.status(201).send({author})
});

router.get("/", async (req,res)=>{
    const author = await Author.find().lean().exec();
    res.status(200).send({author})
});
module.exports=router;
