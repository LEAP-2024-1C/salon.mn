import { Request, Response } from "express";
import Employee from "../models/employees.model";

export const createdEmloyee = async (req: Request, res: Response) => {
  try {
    const { name, email, password, category } = req.body;
    if (!name || !email || !password || !category) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
      return;
    }

    const createdEmployee = await Employee.create({
      name,
      email,
      password,
      category,
    });
    res
      .status(200)
      .json({
        messeage: "Ajiltain amjilttai uuzsee",
        employee: createdEmployee,
      });
  } catch (error) {
    res.status(400).json({ messeage: "Ajiltan uuzehed aldaa garlaa" });
  }
};
