const mongoose=require("mongoose");


const authorSchema=mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
});

const Author=mongoose.model("author",authorSchema);
module.exports=Author;