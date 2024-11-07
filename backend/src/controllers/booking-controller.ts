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
<<<<<<< Updated upstream
    res.status(201).json({ message: "success", data: allBooking });
=======
    res.status(201).json({ message: "success", booking: allBooking });
>>>>>>> Stashed changes
  } catch (error) {
    res.status(400).json("aldaa garlaa booking data fetch");
  }
};
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { firstname, phoneNumber, date, user, employee, service } = req.body;

    if (!firstname || !phoneNumber || !date || !employee || !service) {
      return res.status(400).json({ message: "Fields cannot be empty." });
    }

    const newBook = await Booking.create({
      firstname,
      phoneNumber,

      date,
      employee,
      user,
      service,
    });
    res.status(201).json({ message: "Success", booking: newBook });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.error(error);
  }
};
