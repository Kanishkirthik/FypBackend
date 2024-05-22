const env=require('dotenv').config().parsed;
const jwt=require('jsonwebtoken');
let gerneratejwttoken=function(user){
    return jwt.sign({user},env.JWT_SECRET,{expiresIn: 2 * 24 * 60 * 60});
}
const user=require('../Models/User')
let Create=(request,response)=>{
    const email=request.body.email;
    console.log(email)
    user.find({email:email}).then((data)=>{
        if(data.length==0){
            user.create(request.body).then((userData)=>response.status(201).json({
                "message":"User Created Successfully",
                "Token":gerneratejwttoken({userid:userData._id.toString(),name:userData.name,email:userData.email}),
                "userId":userData._id
            })).catch((err)=>{
                response.status(500).json({message:err.message});
            })
        }else{
            response.status(409).json({message:"User Already Exist"})
        }
    })
}
let Login=(request,response)=>{
    user.find(({email:request.body.email,password:request.body.password})).then((data)=>{
        if(data.length==0){
            response.status(401).json({message:"Invalid Email or Password"})
        }else{
            response.status(200).json({message:"Login Successfully",Token:gerneratejwttoken({id:data[0]._id.toString(),name:data[0].name,email:data[0].email}),UserId:data[0].id.toString(),Role:data[0].Role,name:data[0].name,Companyname:data[0].Companyname})
        }
    }).catch((err)=>{
        response.status(500).json({message:err.message});
    })
}
module.exports={Create,Login}