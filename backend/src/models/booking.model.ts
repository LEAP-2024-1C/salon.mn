import { model, Schema } from "mongoose";

interface IBooking {
  employee: Schema.Types.ObjectId;
  time: string;
  user: Schema.Types.ObjectId;
  date: Date;
  firstname: String;
  phoneNumber: Number;
  service: string;
}

const bookingSchema = new Schema<IBooking>({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: false,
  },
  time: {
    type: String,
    required: false,
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
  service: {
    type: String,
    required: true,
  },
});

const Booking = model<IBooking>("Booking", bookingSchema);
export default Booking;
