// import { syncIndexes } from "mongoose"
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudnary.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser = asyncHandler( async (req,res)=>{

    // get user details from fronted (postman ke througt lege data)
    //validation  - not empty
    // check is user already exists: userName, email
    //check frot images, check for avatar
    // upload them on cloudnary, avatar
    // create user object - create entry in db
    // remove passwoed and refresh token field  from response
    // check for user creation
    // return response  

    const {fullname, email, username, password } = req.body
    // console.log("email :", email)
    // console.log("password :", password)

    // if(fullname === ""){
    //     throw new ApiError("Full name is required", 400)
    // }
    
    if(
        [fullname,email,username,password].some((field)=>(field?.trim() === ""))
    ){
        throw new ApiError(400,"All fields are required")
    }
    
    // check if user already exists
    const existedUser = await User.findOne({
        $or: [{ email },{ username }]
    })
    console.log(existedUser)

    if(existedUser){
        
        throw new ApiError("User with  email or username already exists",409)
    }
    
    
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError("Avatar is required", 400)
    }

    if(!coverImageLocalPath){
        throw new ApiError("Cover Image is required", 400)
    }

    const avatar = await uploadOnCloudinary (avatarLocalPath)
    // const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError("Avatar upload failed", 400)
    }
    if(!coverImage){
        throw new ApiError("coverImage upload failed", 400)
    }

    const user =await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        password,
        
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError("Something Went Wrong Failed to create user", 500)
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser, "User Registed Successfully")
    )



    // //console.log("i am user controller running");
    res.status(200).json({
        message: "Hey anand congrest for the error solving"
    })
})

export {registerUser}