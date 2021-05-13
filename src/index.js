const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cors =require('cors');
const userModel =require('./dbmodel.js');


const app = express();  
  app.use(bodyParser.json());
  app.use(cors());


 app.post("/get", (req, res,next) => {
    res.json("The get request recived...okay thanks");
    next();
 });

app.post("/post-anything",(req, res,next) => {
      const {name,role} =req.body
      console.log({name,role});
      res.status(200).json(`The entered data is ${name} and ${role}`);
 next();
});

app.post("/user-create",async (req ,res ,next) =>{

   const { name , email, password } = req.body;

   console.log({name,email,password});

   const newuser = new userModel({
    name, email ,password
  });

  try {

    await newuser.save();
  } catch (error) {
    return error;
  }
  res.status(200).json({user :newuser.toObject({getters : true}) });

 })






console.log("going to database")
const DB_CONNECTION_STRING = `mongodb+srv://3E9gUFrKAhTRbIne:3E9gUFrKAhTRbIne@cluster0.bzges.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

  })
  .then(() => app.listen(8000, console.log(`server running`)))
  .catch((err) => console.log("error",err));

  // app.use("/post-data", (req, res,next) => {
  //   res.send("hdhdhh");
  //   //res.send("The get request recived...okay thanks");
  
  // });