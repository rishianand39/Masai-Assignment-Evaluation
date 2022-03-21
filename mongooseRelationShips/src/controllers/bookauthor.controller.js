const express=require("express");
const router=express.Router()
const BookAuthor=require("../models/bookauthor.model")


router.post("/", async (req, res)=>{
    const bookauthor = await BookAuthor.create(req.body)

    return res.status(201).send({bookauthor})
});

router.get("/", async (req,res)=>{
    const bookauthor = await BookAuthor.find().populate("author_id").populate("book_id").lean().exec();;
    res.status(200).send({bookauthor})
});

module.exports=router;