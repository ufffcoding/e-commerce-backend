import mongoose from "mongoose";

const product_inventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product_inventory = mongoose.model(
  "Product_inventory",
  product_inventorySchema
);
