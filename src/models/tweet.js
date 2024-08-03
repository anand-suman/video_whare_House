import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    ownew:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }

},{timestamps:true})

export const Tweet = mongoose.model("tweet",tweetSchema)