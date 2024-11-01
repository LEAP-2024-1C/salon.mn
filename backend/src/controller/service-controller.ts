import { Request, Response } from "express";
import Service from "../models/service.model";

export const getService = async (req: Request, res: Response) => {
  try {
    const service = await Service.find({});
    res.status(200).json({ message: "success to get all  services", service });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error to get all services" });
  }
};
