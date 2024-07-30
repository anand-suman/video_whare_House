// import { syncIndexes } from "mongoose"
import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req,res)=>{
    //console.log("i am user controller running");
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser}