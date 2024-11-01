import { model, Schema } from "mongoose";

interface IService {
  price: Number;
  category: String;
  time: String;
  description: String;
}

const serviceSchema = new Schema<IService>({
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Service = model<IService>("Service", serviceSchema);
export default Service;
