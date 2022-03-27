
const express=require('express');
const router=express.Router();
const User=require("../models/user.model")
const { body, validationResult } = require('express-validator');

router.post("/",
    body("first_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("first_name is required. It can't be empty"),

    body("last_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("last_name is requied. You can't leave it blank"),

    body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required.")
    .isEmail(),

    body("pincode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("pincode can't be left blank")
    .isNumeric()
    .custom((value)=>{
        if(value.length !=6){
            throw new Error("pincode must be of 6 digits")
        }
        return true
    }),

    body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("fill your age")
    .isNumeric()
    .custom((value)=>{
        if(value >100 || value<1){
            throw new Error("age should be between  1 to 100")
        }
        return true;
    }),

    body("gender")
    .trim()
    .not()
    .isEmpty()
    .withMessage("gender can't be empty")


,async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const user=await User.create(req.body);

        return res.status(299).send({user});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
});


module.exports=router;