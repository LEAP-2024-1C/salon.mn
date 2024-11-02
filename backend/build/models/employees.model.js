"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const employeeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
        default: "Pass12345",
    },
    profile_img: {
        type: String,
        default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    discription: {
        type: String,
        default: "Олон улсын аварга шалгаруулах тэмцээний 3 р байрны шагналт",
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    comment: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                required: false,
                ref: "User",
            },
            description: {
                type: String,
                required: false,
            },
            rate: {
                type: Number,
                required: false,
                default: 5,
            },
        },
    ],
});
employeeSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        next();
    }
    else {
        const hashedPass = bcrypt_1.default.hashSync(this.password, 10);
        this.password = hashedPass;
        next();
    }
});
const Employee = (0, mongoose_1.model)("Employee", employeeSchema);
exports.default = Employee;
