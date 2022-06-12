import mongoose, { Schema } from "mongoose";

const ErrorSchema = {
  http_code: {
    type: String,
  },
  message: {
    type: String,
  },
  exception: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
};

export const Error = mongoose.model("Error", new Schema(ErrorSchema), "errors");
