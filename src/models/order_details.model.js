import mongoose from "mongoose";

const order_detailsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      required: true,
    },
    payment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment_details",
    },
  },
  { timestamps: true }
);

export const Order_details = mongoose.model(
  "Order_details",
  order_detailsSchema
);
