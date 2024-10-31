import { model, Schema } from "mongoose";
const bcrypt = require("bcrypt");

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: string;
  phoneNumber: string;
  date: Date;
  time:String;
  role: String;
  profile_img: String;
  otp: String;
  passwordResetToken: String;
  passwordResetTokenExpire: Date;
  created_at: Date;
  updated_at: Date;
  address: String;
  cart: Schema.Types.ObjectId;
  booking: Schema.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    default: "User's name",
  },
  phoneNumber: {
    type: String,
    required: [true, "Хэрэглэгчийн phoneNumber-g заавал оруулна"],
  },

  role: { type: String, default: "user" },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  otp: String,
  passwordResetToken: String,
  passwordResetTokenExpire: Date,
  created_at: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    default: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Cart",
  },
  booking: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Booking",
  },
});

const User = model("User", userSchema);
export default User;
