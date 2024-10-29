import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import proRoute from "./routes/product-route";
import categoryRoutes from "./routes/categoryRoutes";
import adminRoute from "./routes/adminRoutes";

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
connectDB(MONGO_URI);
//server asaah
app.listen(PORT, () => {
  console.log(`server localhost: ${PORT}  deer aslaa !!!.`);
});
