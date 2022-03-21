const express=require("express");

const app=express();
app.use(express.json())


const sectionController=require("./controllers/section.controller")
const bookController=require("./controllers/book.controller")
const authorController=require("./controllers/author.controller")
const bookAuthorController=require("./controllers/bookauthor.controller")

app.use("/section",sectionController)
app.use("/book",bookController)
app.use("/author",authorController)
app.use("/bookAuthor",bookAuthorController)




module.exports=app;