import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  getRelProducts,
  getHeroProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product-controller";

const router = Router();

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/hero").get(getHeroProduct);
router.route("/:productID").get(getProduct);
router.route("/updated-product/:productID").put(updateProduct);
router.route("/delete-product/:productID").delete(deleteProduct);

export default router;
