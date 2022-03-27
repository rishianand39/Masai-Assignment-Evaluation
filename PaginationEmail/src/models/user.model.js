
const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    role:{
        type:String,
         required:true,
         enum:['admin','user'],
         default:"user"
        }
},{
    timestamps:true,
    versionKey:false
});

const User=mongoose.model("user",userSchema)
module.exports=User;