import { Router } from "express";
import {
  createCategory,
  createSubCategory,
  getCategory,
  getSubCategory,
} from "../controllers/category-controller";

const router = Router();

router.route("/").post(createCategory);
router.route("/sub").post(createSubCategory);
router.route("/get-category").get(getCategory);
router.route("/get-sub").get(getSubCategory);

export default router;
