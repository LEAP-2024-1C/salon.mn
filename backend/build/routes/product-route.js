"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controller/product-controller");
const router = (0, express_1.Router)();
router.route("/").post(product_controller_1.createProduct);
router.route("/").get(product_controller_1.getProducts);
router.route("/hero").get(product_controller_1.getHeroProduct);
router.route("/:productId").get(product_controller_1.getProduct);
router.route("/related/:categoryId").get(product_controller_1.getRelProducts);
exports.default = router;
