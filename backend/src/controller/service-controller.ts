import { Request, Response } from "express";
import Service from "../models/service.model";

export const getService = async (req: Request, res: Response) => {
  const { price, category, time, description } = req.body;

  try {
    const service = await Service.find({ price, category, time, description });
    res.status(200).json({ message: "success to get all  services" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error to get all services" });
  }
};
