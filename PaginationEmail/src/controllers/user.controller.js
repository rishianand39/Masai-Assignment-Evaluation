
const express=require('express')
const router=express.Router()

const User=require('../models/user.model')

router.get("/",async(req,res)=>{
  try {
      
      const page=req.query.page || 1;
      const pagesize=req.query.pagesize || 5;
     
      const skip=(page-1)*pagesize;

      const user=await User.find().skip(skip).limit(pagesize).lean().exec();
      const totalPage=Math.ceil((await User.find().countDocuments())/pagesize)
      return res.status(200).send({user,totalPage})
  } catch (error) {
      
    return res.status(500).send({error:error.message})
  }
});

router.post("/",async(req,res)=>{
    try {
        
        const user=await User.create(req.body);

        const nodemailer = require("nodemailer");
        
       
        async function main() {

        
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "4f1768f0b85ddb", // generated ethereal user
              pass: "aeb53e59fbfd8a", // generated ethereal password
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: user.email, // list of receivers
            subject:`Welcome to pagination and email assignment ${user.first_name} ${user.last_name}`, // Subject line
            text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
            html: `Hi ${user.first_name}, Please confirm your email address`, // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        }
        
        main().catch(console.error);
        



        return res.status(200).send({user})

    } catch (err) {
        
      return res.status(500).send({error:err.message})
    }
});

module.exports=router;