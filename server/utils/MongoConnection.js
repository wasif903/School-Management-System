import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const isConnected = await mongoose.connect(process.env.MONGO_URI);
        if (isConnected) {
            return console.log("MONGO DB CONNECTED SUCCESSFULLY")
        }
    } catch (error) {
        console.log(error);
        console.log("Error Occured In Database Connection")
    }
}

export default connectDB