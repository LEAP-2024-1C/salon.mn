"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_controller_1 = require("../controllers/service-controller");
const router = (0, express_1.Router)();
router.route("/").get(service_controller_1.getService);
exports.default = router;
