import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connect to MongoDB success")
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("MongoDB disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log("MongoDB connected")
})


//middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/hotels",hotelRoute)
app.use("/api/rooms",roomRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.errorMessage || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(3000, ()=>{
    connect();
    console.log("App Coonected, listening to port 3000")
})