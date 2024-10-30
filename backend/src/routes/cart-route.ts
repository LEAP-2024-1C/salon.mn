import { Router } from "express";
import { createCart } from "../controller/cart-controller";

const router = Router();
router.route("/").post(createCart);
// router.route("/").get(getCart);
// router.route("/:id").put(updateCart);
