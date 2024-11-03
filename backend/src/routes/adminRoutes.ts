import { Router } from "express";
import {
  createAdmin,
  getCurrentUser,
  login,
} from "../controllers/admin-controller";

const router = Router();

router.route("/").post(createAdmin);
router.route("/login").post(login);
router.route("/get").get(getCurrentUser);

export default router;
