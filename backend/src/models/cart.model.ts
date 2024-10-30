import { model, Schema } from "mongoose";

interface ICart {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId; quantity: Number }];
  totalAmount: number;
}

const cartSchema = new Schema<ICart>({
  _id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
});
const Cart = model<ICart>("Cart", cartSchema);
export default Cart;
