import { Request, Response } from "express";
import Employee from "../models/employees.model";
import { error } from "console";

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
      availableDates,
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
      availableDates,
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

    // const findedEmployee = await Employee.findByIdAndUpdate(
    //   employeeID,
    //   ...req.body
    // );

    const findedEmployee = await Employee.findOne({ _id: employeeID });

    if (!findedEmployee) {
      return res.status(400).json({ message: "Employee oldsongui" });
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
    console.log("Employee update hiihed aldaa garlaa", error);
    res
      .status(400)
      .json({ message: "Employee update hiihed aldaa garlaa", error });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.params;

    const find = await Employee.findByIdAndDelete(employeeID);

    res.status(200).json({
      message: "Employee deleted success",
      find,
    });
  } catch (error) {
    res.status(400).json({ message: "Ajiltan ustgahad aldaa garlaa" });
  }
};

export const createAvailableDates = async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.params;
    const { availableDates } = req.body;
    const findEmployee = await Employee.findOne({ _id: employeeID });

    if (!findEmployee) {
      return res.status(401).json({ message: "Ажилтан олдсонгүй" });
    }

    findEmployee.availableDates.push(...availableDates);
    const changeEmployee = await findEmployee?.save();

    res
      .status(200)
      .json({ message: "Employee: Update success ", employee: changeEmployee });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Ажилтаны цагийн хуваар үүсгэхэд алдаа гарлаа " });
  }
};

export const addunAvailableTime = async (req: Request, res: Response) => {
  const { date, empID } = req.body;
  try {
    const employee = await Employee.findById(empID);
    employee?.unAvailableTime.push(date);
    const updatedTime = await employee?.save();
    res.status(200).json({ message: "success", updatedTime });
  } catch (error: any) {
    res.status(400).json({ message: "aldaa garlaa", error });
  }
};
export const deleteUnAvailableTime = async (req: Request, res: Response) => {
  const { date, empID } = req.body;
  try {
    const deleteUnAvailableTimeEmp = await Employee.findOne({ _id: empID });
    const findIndex = deleteUnAvailableTimeEmp?.unAvailableTime.findIndex(
      (d) => {
        d === date;
      }
    );
    if (!findIndex) {
      return res.status(401).json({ message: "Unavailable time oldsongu" });
    }
    deleteUnAvailableTimeEmp?.unAvailableTime.splice(findIndex, 1);
    await deleteUnAvailableTimeEmp?.save();
    res
      .status(200)
      .json({ message: "success", data: deleteUnAvailableTimeEmp });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: " deleteUnAvailableTime  aldaa garlaa", error });
  }
};
