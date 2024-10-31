import { model, Schema } from "mongoose";

interface IBooking {
  time: string;
  user: Schema.Types.ObjectId;
  date: Date;
  firstname: String;
  phoneNumber: Number;
}

const bookingSchema = new Schema<IBooking>({
  time: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  firstname: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Booking = model<IBooking>("Booking", bookingSchema);
export default Booking;
