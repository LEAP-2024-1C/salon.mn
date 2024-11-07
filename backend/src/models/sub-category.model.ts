import { model, Schema } from "mongoose";
interface ISubCategory {
  name: string;
  descreption: string;
  category: Schema.Types.ObjectId;
}

const SubCategorySchema = new Schema<ISubCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    descreption: {
      type: String,
      default: "cateory comment",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);
const SubCategory = model<ISubCategory>("SubCategory", SubCategorySchema);
export default SubCategory;
