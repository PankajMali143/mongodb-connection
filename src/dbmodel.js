const mongoose = require("mongoose");

const userModel = mongoose.model("newuser", {
name: {type :String ,unique :true} ,
email :{ type :String ,unique :true},
password :{type :String},
created_at :{type :Date ,default :Date.now()}
});
module.exports=userModel;
