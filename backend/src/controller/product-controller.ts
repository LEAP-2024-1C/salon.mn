import { Request, Response } from "express";
import Product from "../models/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, images, description, quantity, category } = req.body;
  try {
    const user = await Product.create({
      name,
      price,
      images,
      description,
      quantity,
      category,
    });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(401).json({ message: "aldaa garlaa", error });
  }
};
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};
export const getHeroProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.find({}).sort({ created_at: -1 }).limit(1);
    res.status(200).json({ message: "success to get all product", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get product" });
  }
};
export const getRelProducts = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    const relProduct = await Product.find({ category: categoryId });

    res.status(200).json(relProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get product" });
  }
};
