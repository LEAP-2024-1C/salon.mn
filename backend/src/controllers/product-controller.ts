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
  const { productID } = req.params;
  try {
    const product = await Product.findById({ _id: productID });
    res.status(200).json({ product: product });
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const { name, price, images, description, quantity, category } = req.body;

    const findedProduct = await Product.findById(productID);
    if (!findedProduct) {
      return res.status(401).json({ message: "Product олдсонгүй" });
    }
    findedProduct.name = name;
    findedProduct.price = price;
    findedProduct.images = images;
    findedProduct.category = category;
    findedProduct.description = description;
    findedProduct.quantity = quantity;

    await findedProduct.save();

    res
      .status(200)
      .json({ message: "Product: Update success ", product: findedProduct });
  } catch (error) {
    res.status(400).json({ message: "Product update hiihed aldaa garlaa" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const find = await Product.findOne({ _id: productID });

    if (!find) {
      return res.status(401).json({ message: "Product oldsongui" });
    }

    await find.deleteOne();

    res.status(200).json({
      message: "Product deleted success",
    });
  } catch (error) {
    res.status(400).json({ message: "Product ustgahad aldaa garlaa" });
  }
};
