"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_controller_1 = require("../controller/booking-controller");
const router = (0, express_1.Router)();
router.route("/").post(booking_controller_1.createBooking);
exports.default = router;
