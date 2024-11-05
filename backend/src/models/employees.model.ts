import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IEmployee {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  profile_img: String;
  discription: string;
  category: Schema.Types.ObjectId;
  comment: [
    {
      user: Schema.Types.ObjectId;
      description: string;
      rate: number;
    }
  ];
  availableDates: [{ startDate: Date; endDate: Date }];
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
    required: false,
    default: "Pass12345",
  },
  profile_img: {
    type: String,
    default:
      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
  },
  discription: {
    type: String,
    default: "Олон улсын аварга шалгаруулах тэмцээний 3 р байрны шагналт",
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "User",
      },

      description: {
        type: String,
        required: false,
      },
      rate: {
        type: Number,
        required: false,
        default: 5,
      },
    },
  ],
  availableDates: [
    {
      startDate: {
        type: Date,
        required: true,
        default: new Date(),
      },
      endDate: {
        type: Date,
        required: true,
        default: new Date(),
      },
    },
  ],
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
