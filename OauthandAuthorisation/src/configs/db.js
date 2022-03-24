const mongoose=require("mongoose");
// require('dotenv').config()

const connect=()=>{
    return mongoose.connect('mongodb://rishianand:1234@cluster0-shard-00-00.blh55.mongodb.net:27017,cluster0-shard-00-01.blh55.mongodb.net:27017,cluster0-shard-00-02.blh55.mongodb.net:27017/kaamkarja?ssl=true&replicaSet=atlas-9ln4ah-shard-0&authSource=admin&retryWrites=true&w=majority')
 }
// mongodb+srv://rishianand:1234@cluster0.blh55.mongodb.net/kaamkarja?retryWrites=true&w=majority



module.exports=connect