import { Request, Response } from "express";
import User from "../models/user.model"

export const createBooking = async (req: Request, res: Response) => {
    try {
        const { firstname, phoneNumber, created_at } = req.body;

        // Check if all required fields are provided
        if (!firstname || !phoneNumber || !created_at) {
            return res.status(400).json({ message: "Fields cannot be empty." });
        }

        // Create the user in the database
        const createdUser = await User.create({
            firstname,
            phoneNumber,
            created_at,
        });

        // Return success response with created user
        res.status(201).json({ message: "Success", user: createdUser });

    } catch (error) {
        // Handle server errors
        res.status(500).json({ message: "Server error", error });
        console.error(error);
    }
};
