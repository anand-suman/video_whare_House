import { Router } from "express";
import { registerUser,loginUser,logoutUser, refresAccessToken } from "../controllers/user.controller.js";
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
export default router