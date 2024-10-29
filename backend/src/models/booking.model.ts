import { model, Schema } from "mongoose";

interface IBooking {
  time: string;
  employee: number;
  user: string;
}

const bookingSchema = new Schema<IBooking>({
  time: {
    type: String,
    required: true,
  },
  employee: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Booking = model<IBooking>("Booking", bookingSchema);
export default Booking;
