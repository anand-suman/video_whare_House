import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoschema = new Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true,
    },
    thumbnail:{
        type:String, 
        required:true,
    },
    taital:{
        type:String, 
        required:true,
    },
    duration:{
        type:Number, //cloudinary url
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owenr:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }



},
{
    timestamps:true
}) 

videoschema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoschema)