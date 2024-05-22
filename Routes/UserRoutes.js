const express= require('express')
const router=express.Router()
const{Create,Login}=require('../Controllers/UserControllers')
router.post('/Register',Create)
router.post('/Login',Login)
module.exports=router