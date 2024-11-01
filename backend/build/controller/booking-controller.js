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
exports.createBooking = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, phoneNumber, time, date } = req.body;
        if (!firstname || !phoneNumber || !time || !date) {
            return res.status(400).json({ message: "Fields cannot be empty." });
        }
        const createdUser = yield booking_model_1.default.create({
            firstname,
            phoneNumber,
            time,
            date,
        });
        res.status(201).json({ message: "Success", booking: createdUser });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
        console.error(error);
    }
});
exports.createBooking = createBooking;
