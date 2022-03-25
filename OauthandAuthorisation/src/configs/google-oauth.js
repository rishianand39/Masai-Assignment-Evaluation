require('dotenv').config()
const req = require('express/lib/request');
const passport=require("passport");
const User=require("../models/user.model")
const { v4: uuidv4 } = require('uuid');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
 
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    

    let user=await User.findOne({email:profile?._json?.email}).lean().exec()

    if(!user){
      user=await User.create({
        name:profile._json.name,
        email:profile._json.email,
        password:uuidv4(),
        role:"customer"
      })

    }
      return cb(null,"user");

  }
));

module.exports=passport;


