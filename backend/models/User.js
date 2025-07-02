import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      required: true,
      default: "student",
    },
    password: { type: String, required: true },
    img: { type: String },
    otp: { type: String },
    otpExpire: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
