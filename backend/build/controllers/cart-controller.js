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
exports.updateCart = exports.getCart = exports.createCart = void 0;
const cart_model_1 = __importDefault(require("../models/cart.model"));
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, totalAmount, quantity } = req.body;
    try {
        const findUserCart = yield cart_model_1.default.findOne({ user: userId });
        if (!findUserCart) {
            const cart = yield cart_model_1.default.create({
                user: userId,
                products: { product: productId, quantity },
                totalAmount,
            });
            return res.status(200).json({
                message: "created new cart",
                cart,
            });
        }
        const findDuplicated = findUserCart.products.findIndex((item) => item.product.toString() === productId);
        if (findDuplicated > -1) {
            findUserCart.products[findDuplicated].quantity += quantity;
        }
        else {
            findUserCart.products.push({ product: productId, quantity });
        }
        const updatedCart = yield findUserCart.save();
        res.status(200).json({
            message: "updated cart",
            updatedCart,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "failed to read carts",
        });
    }
});
exports.createCart = createCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    try {
        const cart = yield cart_model_1.default.findOne({ user: id }).populate("products.product");
        // const cart = await Cart.findOne({}).populate("products.product");
        res.status(200).json({
            message: "get cart",
            cart,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "failed to get carts",
        });
    }
});
exports.getCart = getCart;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const { productId, newQuantity } = req.body;
    try {
        // 1. find user cart
        const cart = yield cart_model_1.default.findOne({ user: id });
        if (!cart) {
            return res.status(400).json({
                message: "not found user",
            });
        }
        // 2. find product
        const findProduct = cart.products.findIndex((item) => item.product.toString() === productId);
        cart.products[findProduct].quantity = newQuantity;
        const updatedCart = yield cart.save();
        res.status(200).json({
            message: "updated cart",
            updatedCart,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "failed to get carts",
        });
    }
});
exports.updateCart = updateCart;
