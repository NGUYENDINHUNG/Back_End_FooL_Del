import mongoose  from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://nguyenhung21001:0327228357@cluster0.a0umtwz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}