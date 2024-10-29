import { model, Schema } from "mongoose";

interface IBooking {
  _id: Schema.Types.ObjectId;
  time: string;
  employee: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const bookingSchema = new Schema<IBooking>({
  _id: Schema.Types.ObjectId,
  time: {
    type: String,
    required: true,
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Booking = model<IBooking>("Booking", bookingSchema);
export default Booking;
