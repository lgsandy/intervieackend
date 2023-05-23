import express from "express";
import cors from 'cors'
import noteRoutes from "./routes/noteRoutes.js";
import authRoute from "./auth/auth.js";

const app = express();

//middleware 
app.use(cors())
app.use(express.json());

app.use('/api/note',noteRoutes);
app.use('/api/login',authRoute);

const PORT = process.env.PORT | 5000;
app.listen(PORT,()=>{
    console.log(`Server started on Port:${PORT}`);
});