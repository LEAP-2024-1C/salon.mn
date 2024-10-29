import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IAdmin {
  _id: Schema.Types.ObjectId;
  name: string;
  phonenumber: string;
  email: string;
  password: string;
}

const adminSchema = new Schema<IAdmin>({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
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
adminSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 10);
    this.password = hashedPass;
    next();
  }
});
const Admin = model<IAdmin>("Admin", adminSchema);
export default Admin;
