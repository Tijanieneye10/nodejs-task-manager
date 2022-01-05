import express from "express";
import dotenv from 'dotenv';
import taskRoute from "./routes/taskRoute.js";
import connectDB from "./config/db.js";



const app = express();
const PORT = process.env.PORT || 3000

dotenv.config();
// Connect Database
connectDB();

// Middlewares
app.use(express.json());
app.use('/api/v1/task', taskRoute)


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))