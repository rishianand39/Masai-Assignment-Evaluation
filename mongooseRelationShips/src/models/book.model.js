const mongoose=require("mongoose");


const bookSchema=mongoose.Schema({
    name:{type:String,required:true},
    body:{type:String,required:true},
    section_id:{type : mongoose.Schema.Types.ObjectId, ref : "section", required : true}
},{
    timestamps:true,
    versionKey:false
});

const Book=mongoose.model("book",bookSchema);
module.exports=Book;