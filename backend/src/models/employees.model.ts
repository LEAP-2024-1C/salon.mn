import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IEmployee {
  name: string;
  email: string;
  password: string;
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
