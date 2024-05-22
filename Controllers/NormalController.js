let HiringChallenge=require('../Models/RecuiterHiringChallenge');
let GetHiring=function(request,response){
    HiringChallenge.find({}).then((data)=>{
        response.status(200).send(data)
    }).catch((err)=>response.status(500).json({
        "status" : "failure",
        "message" : "no entry",
        "error" : err
    }))
}
module.exports=GetHiring;