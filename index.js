let express=require('express')

let mongoose=require('mongoose')
let env=require('dotenv').config().parsed;
let bodyParser=require('body-parser');
let cors=require('cors')
const app=express()
app.use(cors())
app.use(bodyParser.json())
async function connect(){
    await mongoose.connect(env.MONGOURL)
    console.log("connected :)");
    app.listen(Number(env.PORT),()=>{
        console.log("Server is Running")
    })
}
connect()
const userRoute=require('./Routes/UserRoutes')
const Recuiter=require('./Routes/RecuiterRoutes')
const HiringChallenge=require('./Routes/HiringChallengeRoutes')
const Normal=require('./Routes/NormalRoute')
app.use('/user',userRoute)
app.use('/HiringChallenge',HiringChallenge)
app.use('/Recuiter',Recuiter)
app.use('/',Normal)