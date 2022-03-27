
const  connect  = require("./configs/db")
const app=require("./index")

app.listen(7000,async()=>{
    try {
        await connect();
        console.log("Listening on port 7000")
    } catch (error) {
        console.log({error:error.message})
    }
})