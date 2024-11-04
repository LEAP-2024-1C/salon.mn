import { Router } from "express";
import { createBooking, getBooking } from "../controllers/booking-controller";

const router = Router();
router.route("/").post(createBooking).get(getBooking);

export default router;
