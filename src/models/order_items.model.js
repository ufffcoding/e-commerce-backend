import mongoose from "mongoose";

const order_itemsSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "_details",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order_details",
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order_items = mongoose.model("Order_items", order_itemsSchema);
