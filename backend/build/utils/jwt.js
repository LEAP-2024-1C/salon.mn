"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_TOKEN_PASSWORD || "", {
        expiresIn: "7d",
    });
};
exports.generateToken = generateToken;
const decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_TOKEN_PASSWORD || "");
};
exports.decodeToken = decodeToken;
