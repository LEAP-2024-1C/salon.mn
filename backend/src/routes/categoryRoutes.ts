import { Router } from "express";
import {
  createCategory,
  createSubCategory,
  getCategory,
  getSubCategory,
} from "../controllers/category-controller";
import { auth, authorize } from "../middlewares/auth";

const router = Router();

router.route("/").post(createCategory);
router.route("/sub").post(auth, authorize("admin"), createSubCategory);
router.route("/get-category").get(getCategory);
router.route("/get-sub").get(getSubCategory);

export default router;
// auth, authorize("admin", "artist"),
