import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection 
connectDB();



// api endpoints 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

// API routes
app.get('/', (req, res) => {
  res.send('API Working');
});

// start server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});


//mongodb+srv://nguyenhung21001:0327228357@cluster0.a0umtwz.mongodb.net/?