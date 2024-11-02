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
exports.getEmployee = exports.getAllEmployee = exports.createdEmloyee = void 0;
const employees_model_1 = __importDefault(require("../models/employees.model"));
const createdEmloyee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, category, profile_img, phoneNumber, discription, } = req.body;
        if (!name || !email || !category || !phoneNumber) {
            res.status(401).json({ message: "Хоосон утга байж болохгүй" });
            return;
        }
        const createdEmployee = yield employees_model_1.default.create({
            name,
            email,
            password,
            category,
            profile_img,
            phoneNumber,
            discription,
        });
        res.status(200).json({
            messeage: "Ajiltain amjilttai uuzsee",
            employee: createdEmployee,
        });
    }
    catch (error) {
        res.status(400).json({ messeage: "Ajiltan uuzehed aldaa garlaa" });
    }
});
exports.createdEmloyee = createdEmloyee;
const getAllEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield employees_model_1.default.find({}).populate("category");
        res.status(200).json({ message: "All employees", allEmployee: getAll });
    }
    catch (error) {
        res.status(400).json({ messeage: "Niit ajiltan harahad aldaa garlaa" });
    }
});
exports.getAllEmployee = getAllEmployee;
const getEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { employeeID } = req.params;
        const employee = yield employees_model_1.default.findById(employeeID);
        res
            .status(200)
            .json({ message: "Id aar employee harah amjilttai bolloo", employee });
    }
    catch (error) {
        res.status(400).json({ message: "Id aar employee harah amjiltgui bolloo" });
    }
});
exports.getEmployee = getEmployee;
