import mongoose from "mongoose";

const product_categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product_category = mongoose.model(
  "Product_category",
  product_categorySchema
);
