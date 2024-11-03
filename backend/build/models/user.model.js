"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        default: "User's name",
    },
    phoneNumber: {
        type: String,
        required: [true, "Хэрэглэгчийн phoneNumber-g заавал оруулна"],
    },
    role: { type: String, default: "user" },
    profile_img: {
        type: String,
        default: "https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    },
    otp: String,
    passwordResetToken: String,
    passwordResetTokenExpire: Date,
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    cart: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        ref: "Cart",
    },
    booking: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: false,
        ref: "Booking",
    },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
