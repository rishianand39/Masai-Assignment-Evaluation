const mongoose=require("mongoose");


const bookAuthorSchema=mongoose.Schema({
    book_id:{type : mongoose.Schema.Types.ObjectId, ref : "book", required : true},
    author_id:{type : mongoose.Schema.Types.ObjectId, ref : "author", required : true},
},{
    timestamps:true,
    versionKey:false
});

const BookAuthor=mongoose.model("bookauthor",bookAuthorSchema);
module.exports=BookAuthor;