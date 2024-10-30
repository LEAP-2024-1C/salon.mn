import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IEmployee {
  name: string;
  email: string;
  password: string;
  profile_img: String;
  discription: string;
  category: Schema.Types.ObjectId;
}

const employeeSchema = new Schema<IEmployee>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  discription: {
    type: String,
    default: "Олон улсын аварга шалгаруулах тэмцээний 3 р байрны шагналт",
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});
employeeSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 10);
    this.password = hashedPass;
    next();
  }
});
const Employee = model<IEmployee>("Employee", employeeSchema);
export default Employee;
