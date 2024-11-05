import { Router } from "express";
import { updateAbout } from "../controllers/about-controller";

const router = Router();
router.route("/").put(updateAbout);

export default router;
