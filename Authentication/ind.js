const express=require("express");
const { default: mongoose } = require("mongoose");
const app=express();

const connect=()=>{
    return mongoose.connect('mongodb+srv://rishi:153@cluster0.izkw2.mongodb.net/abc?retryWrites=true&w=majority')
}


app.listen(4000, async function(){
    try {
        await connect()
        console.log("Listening on port 4000")
        
    } catch (error) {
        console.log(error.message)
    }
})