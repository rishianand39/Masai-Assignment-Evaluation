const express=require("express");
const router=express.Router()
const Book=require("../models/book.model")


router.post("/", async (req, res)=>{
    const book = await Book.create(req.body)

    return res.status(201).send({book})
});

router.get("/", async (req,res)=>{
    const book = await Book.find().populate("section_id").lean().exec()
    res.status(200).send({book})
});

router.get("/:id", async(req, res)=>{
    const book = await Book.findById(req.params.id).lean().exec();
    res.status(200).send({book})
});


module.exports=router;
