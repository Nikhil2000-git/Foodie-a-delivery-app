import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"



//app config

const app = express()
const PORT = 4000
//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoint

app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user/",userRouter)
app.use("/api/cart/", cartRouter)


app.get('/',(req, res)=>{
    res.send("api working!")

})
app.listen(PORT,()=>{
    console.log(`server started sucessfully in ${PORT}`);
    
})

