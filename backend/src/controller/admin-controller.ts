import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Admin from "../models/admin.model";
import { generateToken } from "../utils/jwt";
export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "Hooson utga baij bolohgui" });
    }
    const createdAdmin = await Admin.create({
      name,
      email,
      password,
      phonenumber: "99112233",
    });
    res.status(201).json({ message: "success", user: createdAdmin });
  } catch (error: any) {
    console.log("error", error);
    res
      .status(500)
      .json({ message: "Server Error is here", error: error.message });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    console.log("id", user?._id);
    if (!user) {
      res.status(400).json({ message: "Burtgelgui hereglegch baina" });
    } else {
      const isCheck = bcrypt.compareSync(password, user?.password);
      if (!isCheck) {
        res.status(400).json({
          message: "hereglegchiin email esvel nuuts ug buruu baina",
        });
      } else {
        const token = generateToken({ id: user._id.toString() });
        res.status(200).json({ message: "success", token: token });
      }
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(404).json({ message: "error", user: error.message });
  }
};
