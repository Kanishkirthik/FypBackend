const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const env=require('dotenv').config().parsed;
let auth=function(request,response,next){
    let token= request.headers.authorization && request.headers.authorization.split(' ')[1];
    if(!token){
        response.sendStatus(403)
    }else{
        jwt.verify(token,env.JWT_SECRET,(err)=>{
            if(err){
                return response.sendStatus(500)
            }else{
                next()
            }
        })
    }
}
const{CreateHiring,GetHiring}=require('../Controllers/HiringChallengeControllers')
router.get('/getUserHiring/:id',auth,GetHiring)
router.post('/CreateUserHiring',auth,CreateHiring)
module.exports=router