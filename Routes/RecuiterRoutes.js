const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
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
const {CreateHiring,GetHiring,UpdateHiring,DeleteHiring}=require('../Controllers/RecuiterControllers');
router.get('/get/:id',auth,GetHiring)
router.post('/Create',auth,CreateHiring)
router.patch('/Update/:id',auth,UpdateHiring)
router.delete('/Delete/:id',auth,DeleteHiring)
module.exports=router