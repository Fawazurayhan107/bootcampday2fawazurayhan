import express from "express";
import { connectDB } from './src/config/db.js';
import dotenv from "dotenv";
import ProductRoutes from "./src/routes/ProductRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";


dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.get("/",(req, res) => {
    res.send("Hello Dunia Coding");
});

app.use("/api/products", ProductRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000');
})