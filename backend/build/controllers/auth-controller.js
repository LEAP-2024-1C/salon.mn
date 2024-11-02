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
exports.getCurrentUser = exports.verifyOtp = exports.signin = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const jwt_1 = require("../utils/jwt");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber } = req.body;
        if (!phoneNumber) {
            return res.status(404).json({ message: "Хоосон утга байж байна" });
        }
        const user = yield user_model_1.default.findOne({ phoneNumber: phoneNumber });
        const otp = Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0");
        console.log("otp", otp);
        if (!user) {
            const createdUser = yield user_model_1.default.create({ phoneNumber });
            createdUser.otp = otp;
            yield createdUser.save();
            res.status(201).json({ message: "хэрэглэгч үүслээ", createdUser });
        }
        else {
            user.otp = otp;
            yield user.save();
        }
        // await sendPhoneNum(phoneNumber, otp);
        res
            .status(200)
            .json({ message: `${phoneNumber} дугаар луу OTP код илгээлээ` });
    }
    catch (error) {
        res.status(400).json({ message: "Бүртгэл үүсэхэд алдаа гарлаа" });
    }
});
exports.signin = signin;
const verifyOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber, otpNum } = req.body;
        const findUser = yield user_model_1.default.findOne({
            phoneNumber: phoneNumber,
            otp: otpNum,
        });
        if (!findUser) {
            return res.status(400).json({ message: "Хэрэглэгчийн OTP олдсонгүй" });
        }
        const token = (0, jwt_1.generateToken)({ id: findUser === null || findUser === void 0 ? void 0 : findUser._id });
        res.status(200).json({ message: "Aмжилттай нэвтэрлээ", token, findUser });
    }
    catch (error) {
        res.status(400).json({ message: "Нэвтрэхэд алдаа гарлаа" });
    }
});
exports.verifyOtp = verifyOtp;
const getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const findUser = yield user_model_1.default.findOne({ _id: id });
        res.status(200).json({ message: "User finded", findUser });
    }
    catch (error) {
        res.status(401).json({ message: "User not  find" });
    }
});
exports.getCurrentUser = getCurrentUser;
