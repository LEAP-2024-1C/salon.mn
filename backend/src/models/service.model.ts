import { model, Schema } from "mongoose";

interface IService {
  name: string;
  price: Number;
  category: Schema.Types.ObjectId;
  subCategory: Schema.Types.ObjectId;
  time: String;
  description: String;
}

const serviceSchema = new Schema<IService>({
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SubCategory",
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const Service = model<IService>("Service", serviceSchema);
export default Service;
