"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart-controller");
const router = (0, express_1.Router)();
router.route("/").post(cart_controller_1.createCart);
// router.route("/").get(getCart);
// router.route("/:id").put(updateCart);