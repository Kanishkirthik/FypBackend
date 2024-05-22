const mongoose=require('mongoose')
const HiringDetails=mongoose.Schema({
    Companyname:{type:String,required:true},
    JobTitle:{type:String,required:true,unique:true},
    JobDescription:{type:String,required:true},
    Salary:{type:Number,required:true},
    Requirement:{type:String,required:true},
    Experience:{type:Number,required:true},
    Location:{type:String,required:true},
    Date:{type:Date,required:true}, 
    Status:{type:String,required:true},
    Userid:{type:String,required:true,unique:true}
},{versionkey:false})
const Recuiter=mongoose.model("RecuiterHiringDetails",HiringDetails);
module.exports=Recuiter;
