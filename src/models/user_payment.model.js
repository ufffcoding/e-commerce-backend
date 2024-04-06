import mongoose from "mongoose";

const user_paymentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  payment_type: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  account_no: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
});

export const User_payment = mongoose.model("User_payment", user_paymentSchema);
