
const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://rishianand:1234@cluster0.blh55.mongodb.net/redis?retryWrites=true&w=majority")
}

module.exports=connect;