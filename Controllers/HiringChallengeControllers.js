let HiringChallenge=require('../Models/HiringChallenge')
let CreateHiring=function(request,response){
    HiringChallenge.find({JobTitle:request.body.JobTitle}).then((data)=>{
        if(data.length==0){
            HiringChallenge.create(request.body).then((Data)=>{
                response.send({status:200,message:"Hiring Challenge Created Successfully",data:Data})
            }).catch((err)=>{
                response.send({status:500,message:"Error Occured",data:err})
            })
        }else{
            response.send({status:409,message:"Hiring Challenge Already Exists"})
        }
    })
}
let GetHiring=function(request,response){
    HiringChallenge.find({Userid:request.params.id}).then((data)=>{
        response.status(200).send(data)
    }).catch((err)=>response.status(500).json({
        "status" : "failure",
        "message" : "no entry",
        "error" : err
    }))
}
module.exports={CreateHiring,GetHiring}