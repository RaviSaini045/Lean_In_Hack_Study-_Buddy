import express from "express";
import { logInUser, logOutUser, registerUser, updateUserPassword } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlerwares/auth.middleware.js";
import upload from "../middlerwares/multer.middleware.js";

const router = express.Router();

router.route("/register").post(upload.single("avatar") ,registerUser)
router.route("/login").post(logInUser)
router.route("/update").put(verifyJWT, updateUserPassword)
router.route("/logout").post(verifyJWT,logOutUser)

export default router;
