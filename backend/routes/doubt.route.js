import express from "express";
import { verifyJWT } from "../middlerwares/auth.middleware.js";
import { getDoubt, postDoubt } from "../controllers/doubt.controller.js";
import upload from "../middlerwares/multer.middleware.js";

const router = express.Router();

router.route("/post").post(verifyJWT,upload.array("doubt", 6)  , postDoubt);
router.route("/get").get(verifyJWT, getDoubt);

export default router;