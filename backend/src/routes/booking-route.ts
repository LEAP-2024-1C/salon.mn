import { Router } from "express";
import {createBooking} from "../controller/booking-controller";

const router = Router();
router.route("/").post(createBooking);

export default router;
