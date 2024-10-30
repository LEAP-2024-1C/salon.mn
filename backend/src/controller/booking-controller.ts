import { Request, Response } from "express";
import User from "../models/user.model"
import { time } from "console";

export const createBooking = async (req: Request, res: Response) => {
    try {
        const { firstname, phoneNumber, time, date} = req.body;
        
        if (!firstname || !phoneNumber || !time || !date) {
            return res.status(400).json({ message: "Fields cannot be empty." });
        }

        const createdUser = await User.create({
            firstname,
            phoneNumber,
            time,
            date,
        });

        res.status(201).json({ message: "Success", user: createdUser });

    } catch (error) {
       
        res.status(500).json({ message: "Server error", error });
        console.error(error);
    }
};
