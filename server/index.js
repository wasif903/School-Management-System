import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/MongoConnection.js";

const app = express();
app.use(express.json())
dotenv.config()
connectDB();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})