import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/MongoConnection.js";
import AdminRoutes from "./routes/AdminRoutes.js";

const app = express();
app.use(express.json())
dotenv.config()
connectDB();

const PORT = process.env.PORT;


app.use('/api', AdminRoutes)

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})