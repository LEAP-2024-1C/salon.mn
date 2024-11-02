"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
adminSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next();
    }
    else {
        const hashedPass = bcrypt_1.default.hashSync(this.password, 10);
        this.password = hashedPass;
        next();
    }
});
const Admin = (0, mongoose_1.model)("Admin", adminSchema);
exports.default = Admin;
