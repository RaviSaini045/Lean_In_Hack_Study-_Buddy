import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
const connectDB = async () =>{
    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log(`DB connected to ${instance.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB