import { Request, response, Response } from "express";
import User from "../models/user.model";
import { time } from "console";
import Booking from "../models/booking.model";

export const getBooking = async (req: Request, res: Response) => {
  try {
    const allBooking = await Booking.find({})
      .populate("service")
      .populate("employee")
      .populate("user");
    res.status(201).json({ message: "success", booking: allBooking });
  } catch (error) {
    res.status(400).json("aldaa garlaa booking data fetch");
  }
};
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { firstname, phoneNumber, date, time, user, service, empID } =
      req.body;

    if (!firstname || !phoneNumber || !date || !empID || !service || !time) {
      return res.status(400).json({ message: "Fields cannot be empty." });
    }

    const newBook = await Booking.create({
      firstname,
      phoneNumber,
      date: `${date}T${time}`,
      employee: empID,
      user,
      service,
      empID,
    });
    res.status(201).json({ message: "Success", booking: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.error(error);
  }
};
