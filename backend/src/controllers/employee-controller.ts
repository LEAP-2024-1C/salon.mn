import { Request, Response } from "express";
import Employee from "../models/employees.model";

export const createdEmloyee = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      category,
      profile_img,
      phoneNumber,
      discription,
    } = req.body;
    if (!name || !email || !category || !phoneNumber) {
      res.status(401).json({ message: "Хоосон утга байж болохгүй" });
      return;
    }

    const createdEmployee = await Employee.create({
      name,
      email,
      password,
      category,
      profile_img,
      phoneNumber,
      discription,
    });
    res.status(200).json({
      messeage: "Ajiltain amjilttai uuzsee",
      employee: createdEmployee,
    });
  } catch (error) {
    res.status(400).json({ messeage: "Ajiltan uuzehed aldaa garlaa" });
  }
};

export const getAllEmployee = async (req: Request, res: Response) => {
  try {
    const getAll = await Employee.find({}).populate("category");
    res.status(200).json({ message: "All employees", allEmployee: getAll });
  } catch (error) {
    res.status(400).json({ messeage: "Niit ajiltan harahad aldaa garlaa" });
  }
};

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.params;
    const employee = await Employee.findById(employeeID);
    res
      .status(200)
      .json({ message: "Id aar employee harah amjilttai bolloo", employee });
  } catch (error) {
    res.status(400).json({ message: "Id aar employee harah amjiltgui bolloo" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.params;
    const {
      name,
      email,
      password,
      category,
      profile_img,
      phoneNumber,
      discription,
    } = req.body;

    const findedEmployee = await Employee.findById(employeeID);
    if (!findedEmployee) {
      return res.status(401).json({ message: "Ажилтан олдсонгүй" });
    }
    findedEmployee.name = name;
    findedEmployee.email = email;
    findedEmployee.password = password;
    findedEmployee.category = category;
    findedEmployee.profile_img = profile_img;
    findedEmployee.phoneNumber = phoneNumber;
    findedEmployee.discription = discription;

    await findedEmployee.save();

    res
      .status(200)
      .json({ message: "Employee: Update success ", employee: findedEmployee });
  } catch (error) {
    res.status(400).json({ message: "Employee update hiihed aldaa garlaa" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.params;

    const find = await Employee.findOne({ _id: employeeID });

    if (!find) {
      return res.status(401).json({ message: "Ajiltan oldsongui" });
    }

    await find.deleteOne();

    res.status(200).json({
      message: "Employee deleted success",
    });
  } catch (error) {
    res.status(400).json({ message: "Ajiltan ustgahad aldaa garlaa" });
  }
};
