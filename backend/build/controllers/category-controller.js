"use strict";
// import { Request, Response } from "express";
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
exports.createCategory = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, descreption } = req.body;
    try {
        if (!name || !descreption) {
            return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
        }
        const user = yield category_model_1.default.create({ name, descreption });
        console.log("category", name);
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(401).json({ error });
    }
});
exports.createCategory = createCategory;
