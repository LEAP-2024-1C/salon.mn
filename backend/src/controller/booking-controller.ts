import { Request, Response } from "express";
import User from "../models/user.model";
import { time } from "console";
import Booking from "../models/booking.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { firstname, phoneNumber, time, date } = req.body;

    if (!firstname || !phoneNumber || !time || !date) {
      return res.status(400).json({ message: "Fields cannot be empty." });
    }

    const createdUser = await Booking.create({
      firstname,
      phoneNumber,
      time,
      date,
    });

    res.status(201).json({ message: "Success", booking: createdUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.error(error);
  }
};
