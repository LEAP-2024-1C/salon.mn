import { Router } from "express";
import { signin } from "../controller/auth-controller";

const router = Router();
router.route("/signin").post(signin);
export default router;
