"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    time: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    firstname: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
});
const Booking = (0, mongoose_1.model)("Booking", bookingSchema);
exports.default = Booking;
