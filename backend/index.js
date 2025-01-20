
import express from 'express';
import {connectDB} from './db/connectDB.js';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import wishListRoutes from './routes/wishListRoutes.js'
import cookieParser from 'cookie-parser';
// import path from 'path'
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : `http://localhost:3000`,
    credentials: true,
}));

    
app.use(cookieParser()); // global middleware, allows us to parse incoming cookies
app.use(express.json());// global middleware, allows us to parse incoming requests: req.body

app.use("/api/auth", authRoutes);// middleware handler on the path-> /api/auth
app.use("/api/user", wishListRoutes);

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, "/frontend/build")));
//     app.get("*", (req, res) =>{
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//     })
// }

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listening at http://localhost:${PORT}`);
})
