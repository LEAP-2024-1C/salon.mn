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
exports.getRelProducts = exports.getProduct = exports.getHeroProduct = exports.getProducts = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, images, description, quantity, category } = req.body;
    try {
        const user = yield product_model_1.default.create({
            name,
            price,
            images,
            description,
            quantity,
            category,
        });
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(401).json({ message: "aldaa garlaa", error });
    }
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.find({}).populate("category");
        res.status(200).json({ message: "success to get all product", products });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "failed to get all product" });
    }
});
exports.getProducts = getProducts;
const getHeroProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.find({}).sort({ created_at: -1 }).limit(1);
        res.status(200).json({ message: "success to get all product", product });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "failed to get all product" });
    }
});
exports.getHeroProduct = getHeroProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const product = yield product_model_1.default.findById({ _id: productId });
        res.status(200).json(product);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "failed to get product" });
    }
});
exports.getProduct = getProduct;
const getRelProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    try {
        const relProduct = yield product_model_1.default.find({ category: categoryId });
        res.status(200).json(relProduct);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "failed to get product" });
    }
});
exports.getRelProducts = getRelProducts;
