import { model, Schema } from "mongoose";

interface IService {
  name: String;
  price: Number;
  category: String;
}

const serviceSchema = new Schema<IService>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Service = model<IService>("Service", serviceSchema);
export default Service;
