import mongoose from "mongoose";
import { DB_NAME } from "../constents.js";
// const DB_NAME = "VideoTube"

const connectDB = async () =>{
    try {

        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST ${connectionInstance.connection.host}`);
    }
    catch (err) {
        console.log("MONGODB CONNECTION FAID ",err);
        process.exit(1);
    }
}

export default connectDB;