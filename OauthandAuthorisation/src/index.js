const express=require("express");
const app=express();

app.use(express.json())

const {register,login,generateToken}=require("./controllers/auth.controller")
const productController=require("./controllers/post.controller")
const passport=require("./configs/google-oauth")

app.post("/register",register)
app.post("/login",login)
app.use("/post",productController)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email']}));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    const token=generateToken(req.user)

    return res.status(200).send({token})
  });


module.exports=app;

