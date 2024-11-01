"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const product_route_1 = __importDefault(require("./routes/product-route"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const auth_router_1 = __importDefault(require("./routes/auth-router"));
const employee_route_1 = __importDefault(require("./routes/employee-route"));
const booking_route_1 = __importDefault(require("./routes/booking-route"));
const service_route_1 = __importDefault(require("./routes/service-route"));
dotenv_1.default.config();
const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
//express app object vvsgeh
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/category", categoryRoutes_1.default);
app.use("/api/v1/products", product_route_1.default);
app.use("/api/v1/admin", adminRoutes_1.default);
app.use("/api/v1/auth", auth_router_1.default);
app.use("/api/v1/employee", employee_route_1.default);
app.use("/api/v1/booking", booking_route_1.default);
app.use("/api/v1/service", service_route_1.default);
(0, db_1.connectDB)(MONGO_URI);
//server asaah
app.listen(PORT, () => {
    console.log(`server localhost: ${PORT}  deer aslaa !!!.`);
});
