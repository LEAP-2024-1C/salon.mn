"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const Service = (0, mongoose_1.model)("Service", serviceSchema);
exports.default = Service;
