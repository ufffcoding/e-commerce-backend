import mongoose from "mongoose";

const shopping_sessionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Shopping_session = mongoose.model(
  "Shopping_session",
  shopping_sessionSchema
);
