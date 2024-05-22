const express=require('express')
const router=express.Router( )
const GetHiring =require('../Controllers/NormalController');
router.get('/get',GetHiring)
module.exports=router


