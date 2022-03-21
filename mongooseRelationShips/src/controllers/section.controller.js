const express=require("express");
const router=express.Router()
const Section=require("../models/section.model")


router.post("/", async (req, res)=>{
    const section = await Section.create(req.body)

    return res.status(201).send({section})
});

router.get("/", async (req,res)=>{
    const section = await Section.find().lean().exec();
    res.status(200).send({section})
});
module.exports=router;
