import { Request, Response } from "express";
import User from "../models/user.model";
import { sendPhoneNum } from "../utils/sendPhoneNum";

export const signin = async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(404).json({ message: "Хоосон утга байж байна" });
    }

    const user = await User.findOne({ phoneNumber: phoneNumber }).lean();
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");

    if (!user) {
      const createdUser = await User.create({ phoneNumber });
      createdUser.otp = otp;
      res.status(201).json({ message: "хэрэглэгч үүслээ", createdUser });
    } else {
      user.otp = otp;
    }

    await sendPhoneNum(phoneNumber, otp);
  } catch (error) {
    res.status(400).json({ message: "Бүртгэл үүсэхэд алдаа гарлаа" });
  }
};
