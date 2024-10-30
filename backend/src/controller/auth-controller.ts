import { Request, Response } from "express";
import User from "../models/user.model";
import { sendPhoneNum } from "../utils/sendPhoneNum";
import { generateToken } from "../utils/jwt";

export const signin = async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(404).json({ message: "Хоосон утга байж байна" });
    }

    const user = await User.findOne({ phoneNumber: phoneNumber });
    const otp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    console.log("otp", otp);
    if (!user) {
      const createdUser = await User.create({ phoneNumber });
      createdUser.otp = otp;
      await createdUser.save();
      res.status(201).json({ message: "хэрэглэгч үүслээ", createdUser });
    } else {
      user.otp = otp;
      await user.save();
    }

    // await sendPhoneNum(phoneNumber, otp);
    res
      .status(200)
      .json({ message: `${phoneNumber} дугаар луу OTP код илгээлээ` });
  } catch (error) {
    res.status(400).json({ message: "Бүртгэл үүсэхэд алдаа гарлаа" });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, otpNum } = req.body;
    const findUser = await User.findOne({
      phoneNumber: phoneNumber,
      otp: otpNum,
    });
    if (!findUser) {
      res.status(400).json({ message: "Хэрэглэгчийн OTP олдсонгүй" });
    }
    const token = generateToken({ id: findUser?._id });
    res.status(200).json({ message: "Aмжилттай нэвтэрлээ", token });
  } catch (error) {
    res.status(400).json({ message: "Нэвтрэхэд алдаа гарлаа" });
  }
};
