const mongoose=require('mongoose')
const HiringDetails=mongoose.Schema({
    Companyname:{type:String,required:true},
    JobTitle:{type:String,required:true},
    JobDescription:{type:String,required:true},
    Date:{type:Date,required:true}, 
    Status:{type:String,required:true},
    Userid:{type:String,required:true,unique:true}
},{versionkey:false})
const HiringChallenge=mongoose.model("HiringDetails",HiringDetails);
module.exports=HiringChallenge
