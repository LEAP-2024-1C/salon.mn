"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin-controller");
const router = (0, express_1.Router)();
router.route("/").post(admin_controller_1.createAdmin);
router.route("/login").post(admin_controller_1.login);
exports.default = router;
