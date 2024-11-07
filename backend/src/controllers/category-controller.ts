// import { Request, Response } from "express";

// export const createCategory = (req: Request, res: Response) => {
//   res.status(201).json({ message: "okey" });
// };
import { Request, Response } from "express";
import Category from "../models/category.model";
import SubCategory from "../models/sub-category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { name, descreption } = req.body;
  try {
    if (!name || !descreption) {
      return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
    }
    const category = await Category.create({ name, descreption });

    res.status(200).json({ message: "success", category: category });
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await Category.find({});

    res.status(200).json({ message: "success", allCategory: allCategory });
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const createSubCategory = async (req: Request, res: Response) => {
  const { name, descreption, category } = req.body;
  try {
    if (!name || !descreption || !category) {
      return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
    }
    const sub = await SubCategory.create({ name, descreption, category });

    res.status(200).json({ message: "success", sub });
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const getSubCategory = async (req: Request, res: Response) => {
  try {
    const getSubCategory = await SubCategory.find({}).populate("category");

    res
      .status(200)
      .json({ message: "success", getSubCategory: getSubCategory });
  } catch (error) {
    res.status(401).json({ error });
  }
};
