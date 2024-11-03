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
exports.getService = void 0;
const service_model_1 = __importDefault(require("../models/service.model"));
const getService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield service_model_1.default.find({});
        res.status(200).json({ message: "success to get all  services", service });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "error to get all services" });
    }
});
exports.getService = getService;
