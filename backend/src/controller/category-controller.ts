// import { Request, Response } from "express";

// export const createCategory = (req: Request, res: Response) => {
//   res.status(201).json({ message: "okey" });
// };
import { Request, Response } from "express";
import Category from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { name, descreption } = req.body;
  try {
    if (!name || !descreption) {
      return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
    }
    const user = await Category.create({ name, descreption });
    console.log("category", name);

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(401).json({ error });
  }
};
