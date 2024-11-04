import { Request, response, Response } from "express";
import User from "../models/user.model";
import { time } from "console";
import Booking from "../models/booking.model";

export const getBooking = async (req: Request, res: Response) => {
  try {
    const allBooking = await Booking.find({});
    res.status(201).json({ message: "success", data: allBooking });
  } catch (error) {
    res.status(400).json("aldaa garlaa booking data fetch");
  }
};
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { firstname, phoneNumber, time, date, user, employee } = req.body;

    if (!firstname || !phoneNumber || !time || !date || !employee) {
      return res.status(400).json({ message: "Fields cannot be empty." });
    }

    const newBook = await Booking.create({
      firstname,
      phoneNumber,
      time,
      date,
      employee,
      user,
    });
    res.status(201).json({ message: "Success", booking: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.error(error);
  }
};
