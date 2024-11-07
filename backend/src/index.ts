import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import proRoute from "./routes/product-route";
import categoryRoutes from "./routes/categoryRoutes";
import adminRoute from "./routes/adminRoutes";
import signinRoutes from "./routes/auth-router";
import employeeRoutes from "./routes/employee-route";
import bookingRoute from "./routes/booking-route";
import serviceRoute from "./routes/service-route";
import aboutRoute from "./routes/about-route";

dotenv.config();

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express app object vvsgeh
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", proRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/auth", signinRoutes);

app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/service", serviceRoute);
app.use("/api/v1/about", aboutRoute);

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome salon backend server ");
});
connectDB(MONGO_URI);
//server asaah
app.listen(PORT, () => {
  console.log(`server localhost: ${PORT}  deer aslaa !!!.`);
});
