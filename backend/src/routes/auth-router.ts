import { Router } from "express";
import {
  getCurrentUser,
  signin,
  verifyOtp,
} from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";

const router = Router();
router.route("/signin").post(signin);
router.route("/verifyotp").post(verifyOtp);
router.route("/currentuser").get(auth, getCurrentUser);
export default router;
