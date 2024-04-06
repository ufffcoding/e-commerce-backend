import mongoose from "mongoose";

const user_addressSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  address_line1: {
    type: String,
    required: true,
  },
  address_line2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
});

export const User_address = mongoose.model("User_address", user_addressSchema);
