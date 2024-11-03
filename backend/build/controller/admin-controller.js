"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_model_1 = __importDefault(require("../models/admin.model"));
const jwt_1 = require("../utils/jwt");
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "Hooson utga baij bolohgui" });
        }
        const createdAdmin = yield admin_model_1.default.create({
            name,
            email,
            password,
            phonenumber: "99112233",
        });
        res.status(201).json({ message: "success", user: createdAdmin });
    }
    catch (error) {
        console.log("error", error);
        res
            .status(500)
            .json({ message: "Server Error is here", error: error.message });
    }
});
exports.createAdmin = createAdmin;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield admin_model_1.default.findOne({ email });
        console.log("id", user === null || user === void 0 ? void 0 : user._id);
        if (!user) {
            res.status(400).json({ message: "Burtgelgui hereglegch baina" });
        }
        else {
            const isCheck = bcrypt_1.default.compareSync(password, user === null || user === void 0 ? void 0 : user.password);
            if (!isCheck) {
                res.status(400).json({
                    message: "hereglegchiin email esvel nuuts ug buruu baina",
                });
            }
            else {
                const token = (0, jwt_1.generateToken)({ id: user._id.toString() });
                res.status(200).json({ message: "success", token: token });
            }
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(404).json({ message: "error", user: error.message });
    }
});
exports.login = login;
