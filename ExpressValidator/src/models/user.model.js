const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    first_name:{type:String,},
    last_name:{type:String,},
    email:{type:String,},
    pincode:{type:Number,},
    age:{type:Number,},
    gender:{type:String,enum:["male","female","other"]}
},{
    versionKey:false,
    timestamps:true
});


const User=mongoose.model("user",userSchema);


module.exports=User