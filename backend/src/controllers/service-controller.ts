import { Request, Response } from "express";
import Service from "../models/service.model";

export const getService = async (req: Request, res: Response) => {
  try {
    const service = await Service.find({}).populate("category");
    res
      .status(200)
      .json({ message: "success to get all  services", services: service });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error to get all services" });
  }
};

export const getOneService = async (req: Request, res: Response) => {
  try {
    const { serviceID } = req.params;
    const service = await Service.findOne({ _id: serviceID });

    res
      .status(200)
      .json({ message: "success to get  one service", service: service });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error to get one service" });
  }
};

export const createdService = async (req: Request, res: Response) => {
  const { name, price, description, time, category } = req.body;
  try {
    const createdService = await Service.create({
      name,
      price,
      description,
      time,
      category,
    });

    res
      .status(200)
      .json({ message: " createdService success", service: createdService });
  } catch (error) {
    res.status(401).json({ message: " createdService aldaa garlaa", error });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const { serviceID } = req.params;

    const find = await Service.findOne({ _id: serviceID });

    if (!find) {
      return res.status(401).json({ message: "serviceID oldsongui" });
    }

    await find.deleteOne();

    res.status(200).json({
      message: "service deleted success",
    });
  } catch (error) {
    res.status(400).json({ message: "service ustgahad aldaa garlaa" });
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const { serviceID } = req.params;
    const { name, price, description, time, category } = req.body;

    const finded = await Service.findById(serviceID);
    if (!finded) {
      return res.status(401).json({ message: "Product олдсонгүй" });
    }
    finded.name = name;
    finded.price = price;
    finded.time = time;
    finded.category = category;
    finded.description = description;

    await finded.save();

    res
      .status(200)
      .json({ message: "service: Update success ", service: finded });
  } catch (error) {
    res.status(400).json({ message: "service update hiihed aldaa garlaa" });
  }
};
