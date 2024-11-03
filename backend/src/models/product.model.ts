import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  images: [string];
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },

    images: {
      type: [String],
      default: [
        "https://plus.unsplash.com/premium_photo-1661574850460-448628d28a7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      ],
    },

    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;

// Product.create
