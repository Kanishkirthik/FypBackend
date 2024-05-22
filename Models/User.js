const mongoose =require('mongoose')
const UserDetails=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    Role:{type:String,required:true},
    Companyname:{type:String},
    Resume:{type:String}
},{versionKey:false})
const user=mongoose.model("UserDetails",UserDetails)
module.exports=user
