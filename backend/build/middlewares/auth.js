"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt_1 = require("../utils/jwt");
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(400)
            .json({ message: "Энэ үйлдэл хийхийг тулд нэвтэрнэ үү" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = (0, jwt_1.decodeToken)(token);
    req.user = user;
    next();
};
exports.auth = auth;
