import { Router } from "express";
import { createAdmin, login } from "../controllers/admin-controller";

const router = Router();

router.route("/").post(createAdmin);
router.route("/login").post(login);

export default router;
