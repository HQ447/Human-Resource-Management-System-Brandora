import express from "express";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
import { forgotPassword } from "../controllers/fogotPassword.js";
import { otpVerification } from "../controllers/otpVerification.js";
import { resetPassword } from "../controllers/resetPassword.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/fogotPassword", forgotPassword);
router.post("/otpVerification", otpVerification);
router.post("/resetPassword", resetPassword);

export default router;
