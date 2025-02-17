import { Router } from "express";
import { registerUser,
    loginUser,logoutUser,
    refresAccessToken,
    changecurrentPassword, 
    getCurrentUser, 
    updateAccountDetails, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.midlleware.js"

import { verifyJWT } from "../middlewares/auth.midlleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)


// secured routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refres-token").post(refresAccessToken)
router.route("/change-password").post(verifyJWT,changecurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/update-account").patch(updateAccountDetails)
router.route("/avatar").patch(verifyJWT,upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWT,upload.single("coverImage"), updateUserCoverImage)
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)
router.route("watch-history").get(verifyJWT,getWatchHistory)
export default router