const mongoose=require("mongoose");


const sectionSchema=mongoose.Schema({
   section_name:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

const Section=mongoose.model("section",sectionSchema);
module.exports=Section;