import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://foodie:12345@cluster0.x0corwf.mongodb.net/food-del").then(()=>console.log("mongoDB connected"))
    
}