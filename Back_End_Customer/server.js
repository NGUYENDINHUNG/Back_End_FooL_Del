import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
// API routes
app.get("/", (req, res) => {
  res.send("API Working");
});

// start server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://nguyenhung21001:0327228357@cluster0.a0umtwz.mongodb.net/?
