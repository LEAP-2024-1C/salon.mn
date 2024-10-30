import { Router } from "express";
import { signin, verifyOtp } from "../controller/auth-controller";

const router = Router();
router.route("/signin").post(signin);
router.route("/verifyotp").post(verifyOtp);
export default router;
