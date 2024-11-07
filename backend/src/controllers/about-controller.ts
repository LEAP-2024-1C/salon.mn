import { Request, Response } from "express";
import About from "../models/about.model";

export const updateAbout = async (req: Request, res: Response) => {
  try {
    const { text, image } = req.body;
  } catch (error) {
    console.log(error);
  }
};
