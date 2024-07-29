// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import {DB_NAME} from "./consten"

import express from "express";
import connectDB from "./db/index.js";

dotenv.config(
    {
        path: './env',
    }
)

const app = express();

connectDB()
.then(
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT || 8000}`)
    })
)
.catch((err) => {
    console.log("MONGODB CONNECTION FAIL!!! ",err);
})
















// ;(async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.error("Error in server connection",error); 
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`
//         })
//     }catch(error){
//         console.log("ERROR: ",error);
//         throw error;
//     }
// })()

// function connectDB(){}


// connectDB()